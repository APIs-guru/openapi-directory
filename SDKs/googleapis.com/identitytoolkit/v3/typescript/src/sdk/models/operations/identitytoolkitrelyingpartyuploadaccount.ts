import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IdentitytoolkitRelyingpartyUploadAccountQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyUploadAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: IdentitytoolkitRelyingpartyUploadAccountSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: IdentitytoolkitRelyingpartyUploadAccountSecurityOption2;
}


export class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IdentitytoolkitRelyingpartyUploadAccountQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.IdentitytoolkitRelyingpartyUploadAccountRequest;

  @SpeakeasyMetadata()
  security: IdentitytoolkitRelyingpartyUploadAccountSecurity;
}


export class IdentitytoolkitRelyingpartyUploadAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadAccountResponse?: shared.UploadAccountResponse;
}
