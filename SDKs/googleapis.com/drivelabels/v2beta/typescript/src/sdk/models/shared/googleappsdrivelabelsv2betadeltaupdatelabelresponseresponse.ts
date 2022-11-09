import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse
/** 
 * A single response from an update.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createField" })
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse;

  @Metadata({ data: "json, name=createSelectionChoice" })
  createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse;

  @Metadata({ data: "json, name=deleteField" })
  deleteField?: Map<string, any>;

  @Metadata({ data: "json, name=deleteSelectionChoice" })
  deleteSelectionChoice?: Map<string, any>;

  @Metadata({ data: "json, name=disableField" })
  disableField?: Map<string, any>;

  @Metadata({ data: "json, name=disableSelectionChoice" })
  disableSelectionChoice?: Map<string, any>;

  @Metadata({ data: "json, name=enableField" })
  enableField?: Map<string, any>;

  @Metadata({ data: "json, name=enableSelectionChoice" })
  enableSelectionChoice?: Map<string, any>;

  @Metadata({ data: "json, name=updateField" })
  updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse;

  @Metadata({ data: "json, name=updateFieldType" })
  updateFieldType?: Map<string, any>;

  @Metadata({ data: "json, name=updateLabel" })
  updateLabel?: Map<string, any>;

  @Metadata({ data: "json, name=updateSelectionChoiceProperties" })
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
