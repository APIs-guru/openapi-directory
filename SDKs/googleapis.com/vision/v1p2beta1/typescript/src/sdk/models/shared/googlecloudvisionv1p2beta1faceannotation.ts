import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1FaceAnnotationLandmark } from "./googlecloudvisionv1p2beta1faceannotationlandmark";


export enum GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}


// GoogleCloudVisionV1p2beta1FaceAnnotation
/** 
 * A face annotation object contains the results of face detection.
**/
export class GoogleCloudVisionV1p2beta1FaceAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angerLikelihood" })
  angerLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=blurredLikelihood" })
  blurredLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=detectionConfidence" })
  detectionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=fdBoundingPoly" })
  fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=headwearLikelihood" })
  headwearLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=joyLikelihood" })
  joyLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=landmarkingConfidence" })
  landmarkingConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=landmarks", elemType: GoogleCloudVisionV1p2beta1FaceAnnotationLandmark })
  landmarks?: GoogleCloudVisionV1p2beta1FaceAnnotationLandmark[];

  @SpeakeasyMetadata({ data: "json, name=panAngle" })
  panAngle?: number;

  @SpeakeasyMetadata({ data: "json, name=rollAngle" })
  rollAngle?: number;

  @SpeakeasyMetadata({ data: "json, name=sorrowLikelihood" })
  sorrowLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=surpriseLikelihood" })
  surpriseLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=tiltAngle" })
  tiltAngle?: number;

  @SpeakeasyMetadata({ data: "json, name=underExposedLikelihood" })
  underExposedLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum;
}
