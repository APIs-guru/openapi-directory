import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum {
    ImpressionTypeUnspecified = "IMPRESSION_TYPE_UNSPECIFIED",
    Presented = "PRESENTED",
    Interacted = "INTERACTED"
}


// GoogleMapsPlayablelocationsV3Impression
/** 
 * Encapsulates impression event details.
**/
export class GoogleMapsPlayablelocationsV3Impression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gameObjectType" })
  gameObjectType?: number;

  @SpeakeasyMetadata({ data: "json, name=impressionType" })
  impressionType?: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;
}
