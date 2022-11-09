import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWeatherDisplayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class GetWeatherDisplayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: string;
}


export class GetWeatherDisplayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWeatherDisplayPathParams;

  @Metadata()
  queryParams: GetWeatherDisplayQueryParams;
}


export class GetWeatherDisplayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
