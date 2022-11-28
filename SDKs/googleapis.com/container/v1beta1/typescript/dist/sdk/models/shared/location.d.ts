import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Zone = "ZONE",
    Region = "REGION"
}
/**
 * Location returns the location name, and if the location is recommended for GKE cluster scheduling.
**/
export declare class Location extends SpeakeasyBase {
    name?: string;
    recommended?: boolean;
    type?: LocationTypeEnum;
}
