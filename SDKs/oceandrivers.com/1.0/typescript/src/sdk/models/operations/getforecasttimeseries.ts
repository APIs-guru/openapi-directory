import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetForecastTimeSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class GetForecastTimeSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=days" })
  days?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endtime" })
  endtime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryid" })
  entryid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hours" })
  hours?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inittime" })
  inittime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wave" })
  wave?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weather" })
  weather: string;
}


export class GetForecastTimeSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetForecastTimeSeriesPathParams;

  @Metadata()
  queryParams: GetForecastTimeSeriesQueryParams;
}


export class GetForecastTimeSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
