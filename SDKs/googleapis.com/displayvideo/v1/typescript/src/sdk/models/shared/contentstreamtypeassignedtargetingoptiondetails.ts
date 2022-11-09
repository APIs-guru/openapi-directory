import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum {
    ContentStreamTypeUnspecified = "CONTENT_STREAM_TYPE_UNSPECIFIED"
,    ContentLiveStream = "CONTENT_LIVE_STREAM"
,    ContentOnDemand = "CONTENT_ON_DEMAND"
}


// ContentStreamTypeAssignedTargetingOptionDetails
/** 
 * Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
**/
export class ContentStreamTypeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentStreamType" })
  contentStreamType?: ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
