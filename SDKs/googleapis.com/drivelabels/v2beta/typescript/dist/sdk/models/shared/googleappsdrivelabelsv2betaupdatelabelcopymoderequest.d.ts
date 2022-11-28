import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum {
    CopyModeUnspecified = "COPY_MODE_UNSPECIFIED",
    DoNotCopy = "DO_NOT_COPY",
    AlwaysCopy = "ALWAYS_COPY",
    CopyAppliable = "COPY_APPLIABLE"
}
export declare enum GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
/**
 * Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
**/
export declare class GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest extends SpeakeasyBase {
    copyMode?: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum;
    languageCode?: string;
    useAdminAccess?: boolean;
    view?: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum;
}
