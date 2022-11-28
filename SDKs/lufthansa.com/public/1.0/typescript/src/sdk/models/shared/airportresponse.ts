import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AirportResource } from "./airportresource";



export class AirportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AirportResource" })
  airportResource?: AirportResource;
}
