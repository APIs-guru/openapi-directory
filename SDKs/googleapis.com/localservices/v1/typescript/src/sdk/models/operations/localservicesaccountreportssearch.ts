import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LocalservicesAccountReportsSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.day" })
  endDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.month" })
  endDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.year" })
  endDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.day" })
  startDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.month" })
  startDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.year" })
  startDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class LocalservicesAccountReportsSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LocalservicesAccountReportsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LocalservicesAccountReportsSearchQueryParams;

  @SpeakeasyMetadata()
  security: LocalservicesAccountReportsSearchSecurity;
}


export class LocalservicesAccountReportsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse?: shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
