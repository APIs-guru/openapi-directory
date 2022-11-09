import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice } from "./googleappsdrivelabelsv2fieldselectionoptionschoice";
import { GoogleAppsDriveLabelsV2FieldListOptions } from "./googleappsdrivelabelsv2fieldlistoptions";


// GoogleAppsDriveLabelsV2FieldSelectionOptions
/** 
 * Options for the selection field type.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=choices", elemType: shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice })
  choices?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice[];

  @Metadata({ data: "json, name=listOptions" })
  listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
}
