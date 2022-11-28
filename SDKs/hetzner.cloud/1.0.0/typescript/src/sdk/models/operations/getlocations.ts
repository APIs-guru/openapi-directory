import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetLocations200ApplicationJsonLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;
}


export class GetLocations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: GetLocations200ApplicationJsonLocations })
  locations: GetLocations200ApplicationJsonLocations[];
}


export class GetLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLocationsQueryParams;
}


export class GetLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLocations200ApplicationJsonObject?: GetLocations200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
