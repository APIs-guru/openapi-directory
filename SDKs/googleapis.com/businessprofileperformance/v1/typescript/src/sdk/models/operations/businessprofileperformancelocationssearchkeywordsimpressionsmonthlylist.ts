import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.day" })
  monthlyRangeEndMonthDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.month" })
  monthlyRangeEndMonthMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.endMonth.year" })
  monthlyRangeEndMonthYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.day" })
  monthlyRangeStartMonthDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.month" })
  monthlyRangeStartMonthMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monthlyRange.startMonth.year" })
  monthlyRangeStartMonthYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams;

  @Metadata()
  queryParams: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams;
}


export class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSearchKeywordImpressionsMonthlyResponse?: shared.ListSearchKeywordImpressionsMonthlyResponse;

  @Metadata()
  statusCode: number;
}
