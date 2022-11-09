import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest
/** 
 * Request to enable a Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
