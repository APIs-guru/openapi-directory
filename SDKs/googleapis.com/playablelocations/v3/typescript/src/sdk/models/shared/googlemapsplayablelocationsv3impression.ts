import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum {
    ImpressionTypeUnspecified = "IMPRESSION_TYPE_UNSPECIFIED"
,    Presented = "PRESENTED"
,    Interacted = "INTERACTED"
}


// GoogleMapsPlayablelocationsV3Impression
/** 
 * Encapsulates impression event details.
**/
export class GoogleMapsPlayablelocationsV3Impression extends SpeakeasyBase {
  @Metadata({ data: "json, name=gameObjectType" })
  gameObjectType?: number;

  @Metadata({ data: "json, name=impressionType" })
  impressionType?: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;

  @Metadata({ data: "json, name=locationName" })
  locationName?: string;
}
