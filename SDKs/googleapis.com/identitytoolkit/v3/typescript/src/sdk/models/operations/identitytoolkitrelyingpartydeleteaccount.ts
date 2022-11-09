import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IdentitytoolkitRelyingpartyDeleteAccountQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitRelyingpartyDeleteAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyDeleteAccountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IdentitytoolkitRelyingpartyDeleteAccountQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.IdentitytoolkitRelyingpartyDeleteAccountRequest;

  @Metadata()
  security: IdentitytoolkitRelyingpartyDeleteAccountSecurity;
}


export class IdentitytoolkitRelyingpartyDeleteAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAccountResponse?: shared.DeleteAccountResponse;

  @Metadata()
  statusCode: number;
}
