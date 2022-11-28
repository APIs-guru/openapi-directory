import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput
/** 
 * Request to create a Selection Choice.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choice" })
  choice?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput;

  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;
}
