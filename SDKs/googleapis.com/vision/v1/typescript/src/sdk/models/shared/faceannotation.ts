import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { Landmark } from "./landmark";


export enum FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationUnderExposedLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}


// FaceAnnotation
/** 
 * A face annotation object contains the results of face detection.
**/
export class FaceAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angerLikelihood" })
  angerLikelihood?: FaceAnnotationAngerLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=blurredLikelihood" })
  blurredLikelihood?: FaceAnnotationBlurredLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=detectionConfidence" })
  detectionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=fdBoundingPoly" })
  fdBoundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=headwearLikelihood" })
  headwearLikelihood?: FaceAnnotationHeadwearLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=joyLikelihood" })
  joyLikelihood?: FaceAnnotationJoyLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=landmarkingConfidence" })
  landmarkingConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=landmarks", elemType: Landmark })
  landmarks?: Landmark[];

  @SpeakeasyMetadata({ data: "json, name=panAngle" })
  panAngle?: number;

  @SpeakeasyMetadata({ data: "json, name=rollAngle" })
  rollAngle?: number;

  @SpeakeasyMetadata({ data: "json, name=sorrowLikelihood" })
  sorrowLikelihood?: FaceAnnotationSorrowLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=surpriseLikelihood" })
  surpriseLikelihood?: FaceAnnotationSurpriseLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=tiltAngle" })
  tiltAngle?: number;

  @SpeakeasyMetadata({ data: "json, name=underExposedLikelihood" })
  underExposedLikelihood?: FaceAnnotationUnderExposedLikelihoodEnum;
}
