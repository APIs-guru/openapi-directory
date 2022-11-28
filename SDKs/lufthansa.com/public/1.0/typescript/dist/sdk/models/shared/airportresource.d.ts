import { SpeakeasyBase } from "../../../internal/utils";
import { Airport } from "./airport";
import { Link } from "./link";
/**
 * Container for airport elements.
**/
export declare class AirportResourceAirports extends SpeakeasyBase {
    airport?: Airport;
}
/**
 * Container for meta links.
**/
export declare class AirportResourceMeta extends SpeakeasyBase {
    atVersion?: string;
    link?: Link[];
    totalCount?: number;
}
/**
 * Root element of airport response.
**/
export declare class AirportResource extends SpeakeasyBase {
    airports?: AirportResourceAirports;
    meta?: AirportResourceMeta;
}
