import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLocationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLocationsId200ApplicationJsonLocation extends SpeakeasyBase {
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


export class GetLocationsId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetLocationsId200ApplicationJsonLocation;
}


export class GetLocationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocationsIdPathParams;
}


export class GetLocationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLocationsId200ApplicationJsonObject?: GetLocationsId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
