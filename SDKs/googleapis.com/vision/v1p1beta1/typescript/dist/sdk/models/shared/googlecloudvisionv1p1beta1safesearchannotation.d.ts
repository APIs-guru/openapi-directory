import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum {
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
export declare class GoogleCloudVisionV1p1beta1SafeSearchAnnotation extends SpeakeasyBase {
    adult?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum;
    medical?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum;
    racy?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum;
    spoof?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum;
    violence?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum;
}
