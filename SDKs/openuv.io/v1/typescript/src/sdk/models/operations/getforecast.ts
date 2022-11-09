import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetForecastQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dt" })
  dt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ozone" })
  ozone?: number;
}


export class GetForecastHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-access-token" })
  xAccessToken: string;
}


export class GetForecastRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetForecastQueryParams;

  @Metadata()
  headers: GetForecastHeaders;
}


export class GetForecastResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Forecast, elemDepth: 2 })
  forecastResults?: shared.Forecast[][];
}
