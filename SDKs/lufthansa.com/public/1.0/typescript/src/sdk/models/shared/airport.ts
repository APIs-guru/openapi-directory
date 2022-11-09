import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Name } from "./name";
import { Coordinate } from "./coordinate";


// AirportNames
/** 
 * Container for airport names.
**/
export class AirportNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name", elemType: shared.Name })
  name?: Name[];
}


// AirportPosition
/** 
 * Physical location of an airport. This data section is optional and therefore not always present.
**/
export class AirportPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Coordinate" })
  coordinate?: Coordinate;
}


// Airport
/** 
 * Array of all available airports or one airport matching the request.
**/
export class Airport extends SpeakeasyBase {
  @Metadata({ data: "json, name=AirportCode" })
  airportCode?: string;

  @Metadata({ data: "json, name=CityCode" })
  cityCode?: string;

  @Metadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=LocationType" })
  locationType?: string;

  @Metadata({ data: "json, name=Names" })
  names?: AirportNames;

  @Metadata({ data: "json, name=Position" })
  position?: AirportPosition;

  @Metadata({ data: "json, name=TimeZoneId" })
  timeZoneId?: string;

  @Metadata({ data: "json, name=UtcOffset" })
  utcOffset?: number;
}
