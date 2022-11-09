import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebmastersSitemapsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" })
  siteUrl: string;
}


export class WebmastersSitemapsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sitemapIndex" })
  sitemapIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class WebmastersSitemapsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSitemapsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSitemapsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: WebmastersSitemapsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: WebmastersSitemapsListSecurityOption2;
}


export class WebmastersSitemapsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WebmastersSitemapsListPathParams;

  @Metadata()
  queryParams: WebmastersSitemapsListQueryParams;

  @Metadata()
  security: WebmastersSitemapsListSecurity;
}


export class WebmastersSitemapsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sitemapsListResponse?: shared.SitemapsListResponse;

  @Metadata()
  statusCode: number;
}
