import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest
/** 
 * Request to disable a Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledPolicy" })
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
