import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED"
,    Zone = "ZONE"
,    Region = "REGION"
}


// Location
/** 
 * Location returns the location name, and if the location is recommended for GKE cluster scheduling.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recommended" })
  recommended?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: LocationTypeEnum;
}
