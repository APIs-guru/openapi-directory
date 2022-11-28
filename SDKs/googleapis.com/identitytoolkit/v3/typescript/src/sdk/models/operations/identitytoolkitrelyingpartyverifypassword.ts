import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IdentitytoolkitRelyingpartyVerifyPasswordQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitRelyingpartyVerifyPasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyVerifyPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IdentitytoolkitRelyingpartyVerifyPasswordQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest;

  @SpeakeasyMetadata()
  security: IdentitytoolkitRelyingpartyVerifyPasswordSecurity;
}


export class IdentitytoolkitRelyingpartyVerifyPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyPasswordResponse?: shared.VerifyPasswordResponse;
}
