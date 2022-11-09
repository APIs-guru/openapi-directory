import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLocationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetLocationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLocationsQueryParams;
}


export class GetLocations200ApplicationJsonLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=latitude" })
  latitude: number;

  @Metadata({ data: "json, name=longitude" })
  longitude: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;
}


export class GetLocations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: operations.GetLocations200ApplicationJsonLocations })
  locations: GetLocations200ApplicationJsonLocations[];
}


export class GetLocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLocations200ApplicationJsonObject?: GetLocations200ApplicationJson;

  @Metadata()
  statusCode: number;
}
