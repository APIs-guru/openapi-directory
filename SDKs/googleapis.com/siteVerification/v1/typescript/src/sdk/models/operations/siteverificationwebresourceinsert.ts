import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SiteVerificationWebResourceInsertQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=verificationMethod" })
  verificationMethod: string;
}


export class SiteVerificationWebResourceInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SiteVerificationWebResourceInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SiteVerificationWebResourceInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SiteVerificationWebResourceInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SiteVerificationWebResourceInsertSecurityOption2;
}


export class SiteVerificationWebResourceInsertRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SiteVerificationWebResourceInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SiteVerificationWebResourceResource;

  @Metadata()
  security: SiteVerificationWebResourceInsertSecurity;
}


export class SiteVerificationWebResourceInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteVerificationWebResourceResource?: shared.SiteVerificationWebResourceResource;

  @Metadata()
  statusCode: number;
}
