import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebmastersSearchanalyticsQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" })
  siteUrl: string;
}


export class WebmastersSearchanalyticsQueryQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class WebmastersSearchanalyticsQuerySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSearchanalyticsQuerySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSearchanalyticsQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: WebmastersSearchanalyticsQuerySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: WebmastersSearchanalyticsQuerySecurityOption2;
}


export class WebmastersSearchanalyticsQueryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WebmastersSearchanalyticsQueryPathParams;

  @Metadata()
  queryParams: WebmastersSearchanalyticsQueryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SearchAnalyticsQueryRequest;

  @Metadata()
  security: WebmastersSearchanalyticsQuerySecurity;
}


export class WebmastersSearchanalyticsQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchAnalyticsQueryResponse?: shared.SearchAnalyticsQueryResponse;

  @Metadata()
  statusCode: number;
}
