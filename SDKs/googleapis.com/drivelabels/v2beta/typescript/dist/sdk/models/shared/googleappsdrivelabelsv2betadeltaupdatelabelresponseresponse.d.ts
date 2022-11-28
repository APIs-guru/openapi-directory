import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse";
/**
 * A single response from an update.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse extends SpeakeasyBase {
    createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse;
    createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse;
    deleteField?: Map<string, any>;
    deleteSelectionChoice?: Map<string, any>;
    disableField?: Map<string, any>;
    disableSelectionChoice?: Map<string, any>;
    enableField?: Map<string, any>;
    enableSelectionChoice?: Map<string, any>;
    updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse;
    updateFieldType?: Map<string, any>;
    updateLabel?: Map<string, any>;
    updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
