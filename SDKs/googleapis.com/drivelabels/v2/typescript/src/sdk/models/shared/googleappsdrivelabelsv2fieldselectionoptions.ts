import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice } from "./googleappsdrivelabelsv2fieldselectionoptionschoice";
import { GoogleAppsDriveLabelsV2FieldListOptions } from "./googleappsdrivelabelsv2fieldlistoptions";



// GoogleAppsDriveLabelsV2FieldSelectionOptions
/** 
 * Options for the selection field type.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choices", elemType: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice })
  choices?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice[];

  @SpeakeasyMetadata({ data: "json, name=listOptions" })
  listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
}
