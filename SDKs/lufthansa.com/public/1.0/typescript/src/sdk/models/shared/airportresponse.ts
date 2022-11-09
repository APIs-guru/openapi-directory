import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AirportResource } from "./airportresource";


export class AirportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AirportResource" })
  airportResource?: AirportResource;
}
