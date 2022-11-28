import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { Landmark } from "./landmark";
export declare enum FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum FaceAnnotationUnderExposedLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * A face annotation object contains the results of face detection.
**/
export declare class FaceAnnotation extends SpeakeasyBase {
    angerLikelihood?: FaceAnnotationAngerLikelihoodEnum;
    blurredLikelihood?: FaceAnnotationBlurredLikelihoodEnum;
    boundingPoly?: BoundingPoly;
    detectionConfidence?: number;
    fdBoundingPoly?: BoundingPoly;
    headwearLikelihood?: FaceAnnotationHeadwearLikelihoodEnum;
    joyLikelihood?: FaceAnnotationJoyLikelihoodEnum;
    landmarkingConfidence?: number;
    landmarks?: Landmark[];
    panAngle?: number;
    rollAngle?: number;
    sorrowLikelihood?: FaceAnnotationSorrowLikelihoodEnum;
    surpriseLikelihood?: FaceAnnotationSurpriseLikelihoodEnum;
    tiltAngle?: number;
    underExposedLikelihood?: FaceAnnotationUnderExposedLikelihoodEnum;
}
