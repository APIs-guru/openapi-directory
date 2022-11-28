import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";
import { GoogleAppsDriveLabelsV2betaFieldListOptions } from "./googleappsdrivelabelsv2betafieldlistoptions";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";



// GoogleAppsDriveLabelsV2betaFieldSelectionOptions
/** 
 * Options for the selection field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choices", elemType: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice })
  choices?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice[];

  @SpeakeasyMetadata({ data: "json, name=listOptions" })
  listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
}


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput
/** 
 * Options for the selection field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choices", elemType: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput })
  choices?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput[];

  @SpeakeasyMetadata({ data: "json, name=listOptions" })
  listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
}
