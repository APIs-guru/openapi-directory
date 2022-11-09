import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;

  @Metadata()
  security: IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity;
}


export class IdentitytoolkitRelyingpartyVerifyCustomTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyCustomTokenResponse?: shared.VerifyCustomTokenResponse;
}
