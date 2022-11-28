import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
export declare enum GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
/**
 * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput extends SpeakeasyBase {
    languageCode?: string;
    requests?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput[];
    useAdminAccess?: boolean;
    view?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum;
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
