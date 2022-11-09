import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// GoogleCloudVisionV1p1beta1SafeSearchAnnotation
/** 
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
export class GoogleCloudVisionV1p1beta1SafeSearchAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=adult" })
  adult?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum;

  @Metadata({ data: "json, name=medical" })
  medical?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum;

  @Metadata({ data: "json, name=racy" })
  racy?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum;

  @Metadata({ data: "json, name=spoof" })
  spoof?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum;

  @Metadata({ data: "json, name=violence" })
  violence?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum;
}
