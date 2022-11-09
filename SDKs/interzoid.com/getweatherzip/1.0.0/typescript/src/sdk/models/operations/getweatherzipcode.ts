import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetweatherzipcodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip: string;
}


export class GetweatherzipcodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetweatherzipcodeQueryParams;
}


export class Getweatherzipcode200ApplicationJson extends SpeakeasyBase {
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


export class GetweatherzipcodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getweatherzipcode200ApplicationJsonObject?: Getweatherzipcode200ApplicationJson;
}
