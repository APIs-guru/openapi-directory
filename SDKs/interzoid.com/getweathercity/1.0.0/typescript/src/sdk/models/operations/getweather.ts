import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetweatherQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class Getweather200ApplicationJson extends SpeakeasyBase {
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


export class GetweatherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetweatherQueryParams;
}


export class GetweatherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getweather200ApplicationJsonObject?: Getweather200ApplicationJson;
}
