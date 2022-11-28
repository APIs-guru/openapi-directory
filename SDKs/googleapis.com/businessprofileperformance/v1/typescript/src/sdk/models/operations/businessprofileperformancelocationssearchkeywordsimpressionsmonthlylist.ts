import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.day" })
  monthlyRangeEndMonthDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.month" })
  monthlyRangeEndMonthMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.year" })
  monthlyRangeEndMonthYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.day" })
  monthlyRangeStartMonthDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.month" })
  monthlyRangeStartMonthMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.year" })
  monthlyRangeStartMonthYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams;

  @SpeakeasyMetadata()
  queryParams: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams;
}


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSearchKeywordImpressionsMonthlyResponse?: shared.ListSearchKeywordImpressionsMonthlyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
