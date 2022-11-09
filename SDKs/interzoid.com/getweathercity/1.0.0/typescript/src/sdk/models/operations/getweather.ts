import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetweatherQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class GetweatherRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetweatherQueryParams;
}


export class Getweather200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=RelativeHumidity" })
  relativeHumidity?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=TempC" })
  tempC?: string;

  @Metadata({ data: "json, name=TempF" })
  tempF?: string;

  @Metadata({ data: "json, name=VisibilityMiles" })
  visibilityMiles?: string;

  @Metadata({ data: "json, name=Weather" })
  weather?: string;

  @Metadata({ data: "json, name=WindDir" })
  windDir?: string;

  @Metadata({ data: "json, name=WindMPH" })
  windMph?: string;
}


export class GetweatherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getweather200ApplicationJsonObject?: Getweather200ApplicationJson;
}
