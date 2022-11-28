import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PermissionId
/** 
 * An ID for a user or group as seen in Permission items.
**/
export class PermissionId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
