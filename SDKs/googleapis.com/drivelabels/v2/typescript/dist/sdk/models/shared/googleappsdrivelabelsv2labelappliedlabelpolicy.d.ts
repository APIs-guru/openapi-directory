import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum {
    CopyModeUnspecified = "COPY_MODE_UNSPECIFIED",
    DoNotCopy = "DO_NOT_COPY",
    AlwaysCopy = "ALWAYS_COPY",
    CopyAppliable = "COPY_APPLIABLE"
}
/**
 * Behavior of this label when it's applied to Drive items.
**/
export declare class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy extends SpeakeasyBase {
    copyMode?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum;
}
