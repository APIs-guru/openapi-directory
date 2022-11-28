import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QualityGetDailyDataQualityForSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class QualityGetDailyDataQualityForSiteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteId" })
  siteId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class QualityGetDailyDataQualityForSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QualityGetDailyDataQualityForSitePathParams;

  @SpeakeasyMetadata()
  queryParams: QualityGetDailyDataQualityForSiteQueryParams;
}


export class QualityGetDailyDataQualityForSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dailyQualityResponse?: shared.DailyQualityResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
