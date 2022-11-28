import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetweatherzipcodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip: string;
}


export class Getweatherzipcode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=RelativeHumidity" })
  relativeHumidity?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=TempC" })
  tempC?: string;

  @SpeakeasyMetadata({ data: "json, name=TempF" })
  tempF?: string;

  @SpeakeasyMetadata({ data: "json, name=VisibilityMiles" })
  visibilityMiles?: string;

  @SpeakeasyMetadata({ data: "json, name=Weather" })
  weather?: string;

  @SpeakeasyMetadata({ data: "json, name=WindDir" })
  windDir?: string;

  @SpeakeasyMetadata({ data: "json, name=WindMPH" })
  windMph?: string;
}


export class GetweatherzipcodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetweatherzipcodeQueryParams;
}


export class GetweatherzipcodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getweatherzipcode200ApplicationJsonObject?: Getweatherzipcode200ApplicationJson;
}
