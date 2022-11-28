import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}

export enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}


// GoogleCloudVisionV1p1beta1SafeSearchAnnotation
/** 
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
export class GoogleCloudVisionV1p1beta1SafeSearchAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adult" })
  adult?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum;

  @SpeakeasyMetadata({ data: "json, name=medical" })
  medical?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum;

  @SpeakeasyMetadata({ data: "json, name=racy" })
  racy?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum;

  @SpeakeasyMetadata({ data: "json, name=spoof" })
  spoof?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum;

  @SpeakeasyMetadata({ data: "json, name=violence" })
  violence?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum;
}
