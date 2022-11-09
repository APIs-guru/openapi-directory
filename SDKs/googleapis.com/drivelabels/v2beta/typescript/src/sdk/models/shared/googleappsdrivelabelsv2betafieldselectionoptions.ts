import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";
import { GoogleAppsDriveLabelsV2betaFieldListOptions } from "./googleappsdrivelabelsv2betafieldlistoptions";


// GoogleAppsDriveLabelsV2betaFieldSelectionOptions
/** 
 * Options for the selection field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=choices", elemType: shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice })
  choices?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice[];

  @Metadata({ data: "json, name=listOptions" })
  listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
}
