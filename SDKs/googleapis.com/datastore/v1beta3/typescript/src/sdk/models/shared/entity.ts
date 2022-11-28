import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Value } from "./value";



// Entity
/** 
 * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: Key;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: Value })
  properties?: Map<string, Value>;
}
