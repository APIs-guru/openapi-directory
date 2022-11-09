import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED"
,    SingleRegion = "SINGLE_REGION"
,    MultiRegion = "MULTI_REGION"
}


// GoogleCloudDataplexV1ZoneResourceSpec
/** 
 * Settings for resources attached as assets within a zone.
**/
export class GoogleCloudDataplexV1ZoneResourceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationType" })
  locationType?: GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum;
}
