import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";
import { Coordinate } from "./coordinate";



// AirportNames
/** 
 * Container for airport names.
**/
export class AirportNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name", elemType: Name })
  name?: Name[];
}


// AirportPosition
/** 
 * Physical location of an airport. This data section is optional and therefore not always present.
**/
export class AirportPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Coordinate" })
  coordinate?: Coordinate;
}


// Airport
/** 
 * Array of all available airports or one airport matching the request.
**/
export class Airport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AirportCode" })
  airportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CityCode" })
  cityCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationType" })
  locationType?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: AirportNames;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position?: AirportPosition;

  @SpeakeasyMetadata({ data: "json, name=TimeZoneId" })
  timeZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=UtcOffset" })
  utcOffset?: number;
}
