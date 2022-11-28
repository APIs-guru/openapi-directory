import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWeatherDisplayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class GetWeatherDisplayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: string;
}


export class GetWeatherDisplayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWeatherDisplayPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWeatherDisplayQueryParams;
}


export class GetWeatherDisplayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
