import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";
import { PostalAddress } from "./postaladdress";

export enum LocationLocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED"
,    Country = "COUNTRY"
,    AdministrativeArea = "ADMINISTRATIVE_AREA"
,    SubAdministrativeArea = "SUB_ADMINISTRATIVE_AREA"
,    Locality = "LOCALITY"
,    PostalCode = "POSTAL_CODE"
,    SubLocality = "SUB_LOCALITY"
,    SubLocality1 = "SUB_LOCALITY_1"
,    SubLocality2 = "SUB_LOCALITY_2"
,    Neighborhood = "NEIGHBORHOOD"
,    StreetAddress = "STREET_ADDRESS"
}


// Location
/** 
 * Output only. A resource that represents a location with full geographic information.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=latLng" })
  latLng?: LatLng;

  @Metadata({ data: "json, name=locationType" })
  locationType?: LocationLocationTypeEnum;

  @Metadata({ data: "json, name=postalAddress" })
  postalAddress?: PostalAddress;

  @Metadata({ data: "json, name=radiusInMiles" })
  radiusInMiles?: number;
}
