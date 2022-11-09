import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest
/** 
 * Request to delete a Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
