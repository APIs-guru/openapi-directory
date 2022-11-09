import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest
/** 
 * Request to update a Choice properties.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
