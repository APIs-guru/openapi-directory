import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams;

  @Metadata()
  queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SetIamPolicyRequest;

  @Metadata()
  security: HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  policy?: shared.Policy;

  @Metadata()
  statusCode: number;
}
