import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationsLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class Locations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: LocationsLocations })
  locations?: LocationsLocations[];
}
