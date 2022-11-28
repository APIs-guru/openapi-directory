import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetForecastTimeSeriesWrfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class GetForecastTimeSeriesWrfQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" })
  days?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endtime" })
  endtime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryid" })
  entryid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inittime" })
  inittime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wave" })
  wave?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weather" })
  weather: string;
}


export class GetForecastTimeSeriesWrfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetForecastTimeSeriesWrfPathParams;

  @SpeakeasyMetadata()
  queryParams: GetForecastTimeSeriesWrfQueryParams;
}


export class GetForecastTimeSeriesWrfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
