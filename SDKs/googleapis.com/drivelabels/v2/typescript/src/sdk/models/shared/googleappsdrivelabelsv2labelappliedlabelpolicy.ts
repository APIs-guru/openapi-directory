import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum {
    CopyModeUnspecified = "COPY_MODE_UNSPECIFIED",
    DoNotCopy = "DO_NOT_COPY",
    AlwaysCopy = "ALWAYS_COPY",
    CopyAppliable = "COPY_APPLIABLE"
}


// GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy
/** 
 * Behavior of this label when it's applied to Drive items.
**/
export class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyMode" })
  copyMode?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum;
}
