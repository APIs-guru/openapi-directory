import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ComplyWithGuidelinesRecommendationReasonEnum {
    RecommendationReasonUnspecified = "RECOMMENDATION_REASON_UNSPECIFIED"
,    BusinessLocationSuspended = "BUSINESS_LOCATION_SUSPENDED"
,    BusinessLocationDisabled = "BUSINESS_LOCATION_DISABLED"
}


// ComplyWithGuidelines
/** 
 * Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
**/
export class ComplyWithGuidelines extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendationReason" })
  recommendationReason?: ComplyWithGuidelinesRecommendationReasonEnum;
}
