import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SafeSearchAnnotationAdultEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum SafeSearchAnnotationMedicalEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum SafeSearchAnnotationRacyEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum SafeSearchAnnotationSpoofEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}

export enum SafeSearchAnnotationViolenceEnum {
    Unknown = "UNKNOWN"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// SafeSearchAnnotation
/** 
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
export class SafeSearchAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=adult" })
  adult?: SafeSearchAnnotationAdultEnum;

  @Metadata({ data: "json, name=medical" })
  medical?: SafeSearchAnnotationMedicalEnum;

  @Metadata({ data: "json, name=racy" })
  racy?: SafeSearchAnnotationRacyEnum;

  @Metadata({ data: "json, name=spoof" })
  spoof?: SafeSearchAnnotationSpoofEnum;

  @Metadata({ data: "json, name=violence" })
  violence?: SafeSearchAnnotationViolenceEnum;
}
