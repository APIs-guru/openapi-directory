import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SafeSearchAnnotationAdultEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum SafeSearchAnnotationMedicalEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum SafeSearchAnnotationRacyEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum SafeSearchAnnotationSpoofEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum SafeSearchAnnotationViolenceEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
export declare class SafeSearchAnnotation extends SpeakeasyBase {
    adult?: SafeSearchAnnotationAdultEnum;
    medical?: SafeSearchAnnotationMedicalEnum;
    racy?: SafeSearchAnnotationRacyEnum;
    spoof?: SafeSearchAnnotationSpoofEnum;
    violence?: SafeSearchAnnotationViolenceEnum;
}
