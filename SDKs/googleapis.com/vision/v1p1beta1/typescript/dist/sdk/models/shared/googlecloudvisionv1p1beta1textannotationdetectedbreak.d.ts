import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum {
    Unknown = "UNKNOWN",
    Space = "SPACE",
    SureSpace = "SURE_SPACE",
    EolSureSpace = "EOL_SURE_SPACE",
    Hyphen = "HYPHEN",
    LineBreak = "LINE_BREAK"
}
/**
 * Detected start or end of a structural component.
**/
export declare class GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak extends SpeakeasyBase {
    isPrefix?: boolean;
    type?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum;
}
