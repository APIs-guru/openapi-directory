import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Name } from "./name";
import { Coordinate } from "./coordinate";
/**
 * Container for airport names.
**/
export declare class AirportNames extends SpeakeasyBase {
    name?: Name[];
}
/**
 * Physical location of an airport. This data section is optional and therefore not always present.
**/
export declare class AirportPosition extends SpeakeasyBase {
    coordinate?: Coordinate;
}
/**
 * Array of all available airports or one airport matching the request.
**/
export declare class Airport extends SpeakeasyBase {
    airportCode?: string;
    cityCode?: string;
    countryCode?: string;
    locationType?: string;
    names?: AirportNames;
    position?: AirportPosition;
    timeZoneId?: string;
    utcOffset?: number;
}
