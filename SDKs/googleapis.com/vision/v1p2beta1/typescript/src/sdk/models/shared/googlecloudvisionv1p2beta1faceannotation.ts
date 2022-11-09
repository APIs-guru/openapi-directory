import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1FaceAnnotationLandmark } from "./googlecloudvisionv1p2beta1faceannotationlandmark";

export enum GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// GoogleCloudVisionV1p2beta1FaceAnnotation
/** 
 * A face annotation object contains the results of face detection.
**/
export class GoogleCloudVisionV1p2beta1FaceAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=angerLikelihood" })
  angerLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum;

  @Metadata({ data: "json, name=blurredLikelihood" })
  blurredLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum;

  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=detectionConfidence" })
  detectionConfidence?: number;

  @Metadata({ data: "json, name=fdBoundingPoly" })
  fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=headwearLikelihood" })
  headwearLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum;

  @Metadata({ data: "json, name=joyLikelihood" })
  joyLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum;

  @Metadata({ data: "json, name=landmarkingConfidence" })
  landmarkingConfidence?: number;

  @Metadata({ data: "json, name=landmarks", elemType: shared.GoogleCloudVisionV1p2beta1FaceAnnotationLandmark })
  landmarks?: GoogleCloudVisionV1p2beta1FaceAnnotationLandmark[];

  @Metadata({ data: "json, name=panAngle" })
  panAngle?: number;

  @Metadata({ data: "json, name=rollAngle" })
  rollAngle?: number;

  @Metadata({ data: "json, name=sorrowLikelihood" })
  sorrowLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum;

  @Metadata({ data: "json, name=surpriseLikelihood" })
  surpriseLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum;

  @Metadata({ data: "json, name=tiltAngle" })
  tiltAngle?: number;

  @Metadata({ data: "json, name=underExposedLikelihood" })
  underExposedLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum;
}
