import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Airport } from "./airport";
import { Link } from "./link";


// AirportResourceAirports
/** 
 * Container for airport elements.
**/
export class AirportResourceAirports extends SpeakeasyBase {
  @Metadata({ data: "json, name=Airport" })
  airport?: Airport;
}


// AirportResourceMeta
/** 
 * Container for meta links.
**/
export class AirportResourceMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=@Version" })
  atVersion?: string;

  @Metadata({ data: "json, name=Link", elemType: shared.Link })
  link?: Link[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}


// AirportResource
/** 
 * Root element of airport response.
**/
export class AirportResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Airports" })
  airports?: AirportResourceAirports;

  @Metadata({ data: "json, name=Meta" })
  meta?: AirportResourceMeta;
}
