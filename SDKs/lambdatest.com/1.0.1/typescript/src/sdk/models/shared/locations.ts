import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LocationsLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class Locations extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.LocationsLocations })
  locations?: LocationsLocations[];
}
