import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Zone = "ZONE",
    Region = "REGION"
}


// Location
/** 
 * Location returns the location name, and if the location is recommended for GKE cluster scheduling.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended" })
  recommended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LocationTypeEnum;
}
