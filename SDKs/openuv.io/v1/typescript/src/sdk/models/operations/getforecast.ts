import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetForecastQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dt" })
  dt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ozone" })
  ozone?: number;
}


export class GetForecastHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-access-token" })
  xAccessToken: string;
}


export class GetForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetForecastQueryParams;

  @SpeakeasyMetadata()
  headers: GetForecastHeaders;
}


export class GetForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Forecast, elemDepth: 2 })
  forecastResults?: shared.Forecast[][];
}
