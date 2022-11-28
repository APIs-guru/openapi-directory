import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IdentitytoolkitRelyingpartyResetPasswordQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitRelyingpartyResetPasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IdentitytoolkitRelyingpartyResetPasswordQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.IdentitytoolkitRelyingpartyResetPasswordRequest;

  @SpeakeasyMetadata()
  security: IdentitytoolkitRelyingpartyResetPasswordSecurity;
}


export class IdentitytoolkitRelyingpartyResetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resetPasswordResponse?: shared.ResetPasswordResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
