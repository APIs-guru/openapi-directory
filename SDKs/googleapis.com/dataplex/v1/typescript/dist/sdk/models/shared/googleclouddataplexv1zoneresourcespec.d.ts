import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    SingleRegion = "SINGLE_REGION",
    MultiRegion = "MULTI_REGION"
}
/**
 * Settings for resources attached as assets within a zone.
**/
export declare class GoogleCloudDataplexV1ZoneResourceSpec extends SpeakeasyBase {
    locationType?: GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum;
}
