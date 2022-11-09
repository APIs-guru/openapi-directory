import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QualityGetDailyDataQualityForSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class QualityGetDailyDataQualityForSiteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=siteId" })
  siteId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class QualityGetDailyDataQualityForSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QualityGetDailyDataQualityForSitePathParams;

  @Metadata()
  queryParams: QualityGetDailyDataQualityForSiteQueryParams;
}


export class QualityGetDailyDataQualityForSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dailyQualityResponse?: shared.DailyQualityResponse;

  @Metadata()
  statusCode: number;
}
