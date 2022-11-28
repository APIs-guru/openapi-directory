import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DetectedBreakTypeEnum {
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
export declare class DetectedBreak extends SpeakeasyBase {
    isPrefix?: boolean;
    type?: DetectedBreakTypeEnum;
}
