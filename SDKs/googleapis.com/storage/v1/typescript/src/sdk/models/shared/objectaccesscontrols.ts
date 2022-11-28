import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";



// ObjectAccessControls
/** 
 * An access-control list.
**/
export class ObjectAccessControls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ObjectAccessControl })
  items?: ObjectAccessControl[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
