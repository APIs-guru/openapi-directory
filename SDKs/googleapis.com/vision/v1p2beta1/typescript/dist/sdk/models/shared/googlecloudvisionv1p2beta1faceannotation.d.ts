import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1FaceAnnotationLandmark } from "./googlecloudvisionv1p2beta1faceannotationlandmark";
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum {
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
export declare class GoogleCloudVisionV1p2beta1FaceAnnotation extends SpeakeasyBase {
    angerLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum;
    blurredLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum;
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    detectionConfidence?: number;
    fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    headwearLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum;
    joyLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum;
    landmarkingConfidence?: number;
    landmarks?: GoogleCloudVisionV1p2beta1FaceAnnotationLandmark[];
    panAngle?: number;
    rollAngle?: number;
    sorrowLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum;
    surpriseLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum;
    tiltAngle?: number;
    underExposedLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum;
}
