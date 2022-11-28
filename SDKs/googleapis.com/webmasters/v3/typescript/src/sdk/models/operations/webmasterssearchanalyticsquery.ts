import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebmastersSearchanalyticsQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" })
  siteUrl: string;
}


export class WebmastersSearchanalyticsQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class WebmastersSearchanalyticsQuerySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSearchanalyticsQuerySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSearchanalyticsQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: WebmastersSearchanalyticsQuerySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: WebmastersSearchanalyticsQuerySecurityOption2;
}


export class WebmastersSearchanalyticsQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebmastersSearchanalyticsQueryPathParams;

  @SpeakeasyMetadata()
  queryParams: WebmastersSearchanalyticsQueryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SearchAnalyticsQueryRequest;

  @SpeakeasyMetadata()
  security: WebmastersSearchanalyticsQuerySecurity;
}


export class WebmastersSearchanalyticsQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchAnalyticsQueryResponse?: shared.SearchAnalyticsQueryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
