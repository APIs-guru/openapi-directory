import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLocationsIdPathParams;
}


export class GetLocationsId200ApplicationJsonLocation extends SpeakeasyBase {
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


export class GetLocationsId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: GetLocationsId200ApplicationJsonLocation;
}


export class GetLocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLocationsId200ApplicationJsonObject?: GetLocationsId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
