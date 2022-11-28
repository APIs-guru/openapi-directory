import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";



// GoogleAppsDriveLabelsV2betaPublishLabelRequest
/** 
 * Request to publish a label.
**/
export class GoogleAppsDriveLabelsV2betaPublishLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
