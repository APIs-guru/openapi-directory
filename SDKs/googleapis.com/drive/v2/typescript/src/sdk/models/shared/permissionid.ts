import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PermissionId
/** 
 * An ID for a user or group as seen in Permission items.
**/
export class PermissionId extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
