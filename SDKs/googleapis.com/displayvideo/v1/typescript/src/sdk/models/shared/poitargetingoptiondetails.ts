import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PoiTargetingOptionDetails
/** 
 * Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.
**/
export class PoiTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}
