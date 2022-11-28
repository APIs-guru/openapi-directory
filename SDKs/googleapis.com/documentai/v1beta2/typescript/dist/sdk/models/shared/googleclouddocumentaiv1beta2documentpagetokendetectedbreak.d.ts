import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Space = "SPACE",
    WideSpace = "WIDE_SPACE",
    Hyphen = "HYPHEN"
}
/**
 * Detected break at the end of a Token.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak extends SpeakeasyBase {
    type?: GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum;
}
