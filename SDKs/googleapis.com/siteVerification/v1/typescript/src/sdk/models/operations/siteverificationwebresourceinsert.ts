import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SiteVerificationWebResourceInsertQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verificationMethod" })
  verificationMethod: string;
}


export class SiteVerificationWebResourceInsertSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SiteVerificationWebResourceInsertSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SiteVerificationWebResourceInsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SiteVerificationWebResourceInsertSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SiteVerificationWebResourceInsertSecurityOption2;
}


export class SiteVerificationWebResourceInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SiteVerificationWebResourceInsertQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SiteVerificationWebResourceResource;

  @SpeakeasyMetadata()
  security: SiteVerificationWebResourceInsertSecurity;
}


export class SiteVerificationWebResourceInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  siteVerificationWebResourceResource?: shared.SiteVerificationWebResourceResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
