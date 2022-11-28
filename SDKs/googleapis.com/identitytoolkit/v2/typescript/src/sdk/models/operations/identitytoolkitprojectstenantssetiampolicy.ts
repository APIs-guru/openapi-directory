import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IdentitytoolkitProjectsTenantsSetIamPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams extends SpeakeasyBase {
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


export class IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitProjectsTenantsSetIamPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2;
}


export class IdentitytoolkitProjectsTenantsSetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IdentitytoolkitProjectsTenantsSetIamPolicyPathParams;

  @SpeakeasyMetadata()
  queryParams: IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleIamV1SetIamPolicyRequest;

  @SpeakeasyMetadata()
  security: IdentitytoolkitProjectsTenantsSetIamPolicySecurity;
}


export class IdentitytoolkitProjectsTenantsSetIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleIamV1Policy?: shared.GoogleIamV1Policy;

  @SpeakeasyMetadata()
  statusCode: number;
}
