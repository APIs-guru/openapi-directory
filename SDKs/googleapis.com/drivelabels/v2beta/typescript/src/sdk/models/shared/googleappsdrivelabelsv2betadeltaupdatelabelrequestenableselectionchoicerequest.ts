import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest
/** 
 * Request to enable a Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
