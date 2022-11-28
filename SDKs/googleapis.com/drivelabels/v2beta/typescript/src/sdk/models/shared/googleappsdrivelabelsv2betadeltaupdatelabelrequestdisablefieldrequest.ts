import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
/** 
 * Request to disable the Field.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledPolicy" })
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
