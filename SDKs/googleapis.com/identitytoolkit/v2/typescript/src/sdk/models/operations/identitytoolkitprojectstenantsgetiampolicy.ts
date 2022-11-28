import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IdentitytoolkitProjectsTenantsGetIamPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitProjectsTenantsGetIamPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2;
}


export class IdentitytoolkitProjectsTenantsGetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IdentitytoolkitProjectsTenantsGetIamPolicyPathParams;

  @SpeakeasyMetadata()
  queryParams: IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleIamV1GetIamPolicyRequest;

  @SpeakeasyMetadata()
  security: IdentitytoolkitProjectsTenantsGetIamPolicySecurity;
}


export class IdentitytoolkitProjectsTenantsGetIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleIamV1Policy?: shared.GoogleIamV1Policy;

  @SpeakeasyMetadata()
  statusCode: number;
}
