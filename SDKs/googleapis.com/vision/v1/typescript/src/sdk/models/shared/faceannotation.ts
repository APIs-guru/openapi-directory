import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";
import { BoundingPoly } from "./boundingpoly";
import { Landmark } from "./landmark";

export enum FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum FaceAnnotationUnderExposedLikelihoodEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// FaceAnnotation
/** 
 * A face annotation object contains the results of face detection.
**/
export class FaceAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=angerLikelihood" })
  angerLikelihood?: FaceAnnotationAngerLikelihoodEnum;

  @Metadata({ data: "json, name=blurredLikelihood" })
  blurredLikelihood?: FaceAnnotationBlurredLikelihoodEnum;

  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @Metadata({ data: "json, name=detectionConfidence" })
  detectionConfidence?: number;

  @Metadata({ data: "json, name=fdBoundingPoly" })
  fdBoundingPoly?: BoundingPoly;

  @Metadata({ data: "json, name=headwearLikelihood" })
  headwearLikelihood?: FaceAnnotationHeadwearLikelihoodEnum;

  @Metadata({ data: "json, name=joyLikelihood" })
  joyLikelihood?: FaceAnnotationJoyLikelihoodEnum;

  @Metadata({ data: "json, name=landmarkingConfidence" })
  landmarkingConfidence?: number;

  @Metadata({ data: "json, name=landmarks", elemType: shared.Landmark })
  landmarks?: Landmark[];

  @Metadata({ data: "json, name=panAngle" })
  panAngle?: number;

  @Metadata({ data: "json, name=rollAngle" })
  rollAngle?: number;

  @Metadata({ data: "json, name=sorrowLikelihood" })
  sorrowLikelihood?: FaceAnnotationSorrowLikelihoodEnum;

  @Metadata({ data: "json, name=surpriseLikelihood" })
  surpriseLikelihood?: FaceAnnotationSurpriseLikelihoodEnum;

  @Metadata({ data: "json, name=tiltAngle" })
  tiltAngle?: number;

  @Metadata({ data: "json, name=underExposedLikelihood" })
  underExposedLikelihood?: FaceAnnotationUnderExposedLikelihoodEnum;
}
