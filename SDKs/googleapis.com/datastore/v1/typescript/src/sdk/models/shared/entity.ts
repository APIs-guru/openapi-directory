import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";
import { Value } from "./value";


// Entity
/** 
 * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: Key;

  @Metadata({ data: "json, name=properties", elemType: shared.Value })
  properties?: Map<string, Value>;
}
