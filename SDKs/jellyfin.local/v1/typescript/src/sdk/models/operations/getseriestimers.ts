import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSeriesTimersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: shared.SortOrderEnum;
}


export class GetSeriesTimersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSeriesTimersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSeriesTimersQueryParams;

  @SpeakeasyMetadata()
  security: GetSeriesTimersSecurity;
}


export class GetSeriesTimersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seriesTimerInfoDtoQueryResult?: shared.SeriesTimerInfoDtoQueryResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
