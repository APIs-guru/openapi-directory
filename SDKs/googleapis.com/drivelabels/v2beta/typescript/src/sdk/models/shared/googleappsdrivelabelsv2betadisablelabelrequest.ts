import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";



// GoogleAppsDriveLabelsV2betaDisableLabelRequest
/** 
 * Request to deprecate a published Label.
**/
export class GoogleAppsDriveLabelsV2betaDisableLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledPolicy" })
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
