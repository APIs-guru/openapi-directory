import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSeriesTimersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: shared.SortOrderEnum;
}


export class GetSeriesTimersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSeriesTimersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSeriesTimersQueryParams;

  @Metadata()
  security: GetSeriesTimersSecurity;
}


export class GetSeriesTimersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seriesTimerInfoDtoQueryResult?: shared.SeriesTimerInfoDtoQueryResult;

  @Metadata()
  statusCode: number;
}
