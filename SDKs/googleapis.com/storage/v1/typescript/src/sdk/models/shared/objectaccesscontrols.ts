import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectAccessControl } from "./objectaccesscontrol";


// ObjectAccessControls
/** 
 * An access-control list.
**/
export class ObjectAccessControls extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ObjectAccessControl })
  items?: ObjectAccessControl[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
