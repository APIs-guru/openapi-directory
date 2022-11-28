import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest
/** 
 * Request to delete a Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
