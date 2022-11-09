import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest
/** 
 * Request to create a Selection Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=choice" })
  choice?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice;

  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;
}
