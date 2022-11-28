import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
import { PostalAddress } from "./postaladdress";


export enum LocationLocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Country = "COUNTRY",
    AdministrativeArea = "ADMINISTRATIVE_AREA",
    SubAdministrativeArea = "SUB_ADMINISTRATIVE_AREA",
    Locality = "LOCALITY",
    PostalCode = "POSTAL_CODE",
    SubLocality = "SUB_LOCALITY",
    SubLocality1 = "SUB_LOCALITY_1",
    SubLocality2 = "SUB_LOCALITY_2",
    Neighborhood = "NEIGHBORHOOD",
    StreetAddress = "STREET_ADDRESS"
}


// Location
/** 
 * Output only. A resource that represents a location with full geographic information.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latLng" })
  latLng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: LocationLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=postalAddress" })
  postalAddress?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=radiusInMiles" })
  radiusInMiles?: number;
}
