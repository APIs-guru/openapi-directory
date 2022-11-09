import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";


// GoogleAppsDriveLabelsV2betaDisableLabelRequest
/** 
 * Request to deprecate a published Label.
**/
export class GoogleAppsDriveLabelsV2betaDisableLabelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledPolicy" })
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
