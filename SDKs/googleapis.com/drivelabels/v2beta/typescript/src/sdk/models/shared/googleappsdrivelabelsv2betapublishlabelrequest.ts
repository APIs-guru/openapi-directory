import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";


// GoogleAppsDriveLabelsV2betaPublishLabelRequest
/** 
 * Request to publish a label.
**/
export class GoogleAppsDriveLabelsV2betaPublishLabelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
