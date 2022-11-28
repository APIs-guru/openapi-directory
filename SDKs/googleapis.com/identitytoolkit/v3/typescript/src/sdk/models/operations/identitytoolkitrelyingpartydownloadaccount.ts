import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IdentitytoolkitRelyingpartyDownloadAccountQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitRelyingpartyDownloadAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2;
}


export class IdentitytoolkitRelyingpartyDownloadAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IdentitytoolkitRelyingpartyDownloadAccountQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.IdentitytoolkitRelyingpartyDownloadAccountRequest;

  @SpeakeasyMetadata()
  security: IdentitytoolkitRelyingpartyDownloadAccountSecurity;
}


export class IdentitytoolkitRelyingpartyDownloadAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadAccountResponse?: shared.DownloadAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
