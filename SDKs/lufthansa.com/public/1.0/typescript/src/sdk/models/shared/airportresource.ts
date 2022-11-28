import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Airport } from "./airport";
import { Link } from "./link";



// AirportResourceAirports
/** 
 * Container for airport elements.
**/
export class AirportResourceAirports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Airport" })
  airport?: Airport;
}


// AirportResourceMeta
/** 
 * Container for meta links.
**/
export class AirportResourceMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@Version" })
  atVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Link", elemType: Link })
  link?: Link[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}


// AirportResource
/** 
 * Root element of airport response.
**/
export class AirportResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Airports" })
  airports?: AirportResourceAirports;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: AirportResourceMeta;
}
