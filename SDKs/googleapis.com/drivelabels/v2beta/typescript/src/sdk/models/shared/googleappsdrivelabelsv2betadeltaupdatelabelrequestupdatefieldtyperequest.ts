import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaFieldDateOptions } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaFieldIntegerOptions } from "./googleappsdrivelabelsv2betafieldintegeroptions";
import { GoogleAppsDriveLabelsV2betaFieldLongTextOptions } from "./googleappsdrivelabelsv2betafieldlongtextoptions";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptions } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldTextOptions } from "./googleappsdrivelabelsv2betafieldtextoptions";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest
/** 
 * Request to change the type of a Field.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateOptions" })
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=integerOptions" })
  integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions;

  @Metadata({ data: "json, name=longTextOptions" })
  longTextOptions?: GoogleAppsDriveLabelsV2betaFieldLongTextOptions;

  @Metadata({ data: "json, name=selectionOptions" })
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions;

  @Metadata({ data: "json, name=textOptions" })
  textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "json, name=userOptions" })
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
