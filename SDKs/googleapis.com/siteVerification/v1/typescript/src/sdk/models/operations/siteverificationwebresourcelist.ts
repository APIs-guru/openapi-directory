import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SiteVerificationWebResourceListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class SiteVerificationWebResourceListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SiteVerificationWebResourceListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SiteVerificationWebResourceListQueryParams;

  @Metadata()
  security: SiteVerificationWebResourceListSecurity;
}


export class SiteVerificationWebResourceListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteVerificationWebResourceListResponse?: shared.SiteVerificationWebResourceListResponse;

  @Metadata()
  statusCode: number;
}
