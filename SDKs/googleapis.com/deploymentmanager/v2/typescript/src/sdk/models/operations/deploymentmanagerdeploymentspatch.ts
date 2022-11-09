import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeploymentmanagerDeploymentsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment" })
  deployment: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export enum DeploymentmanagerDeploymentsPatchCreatePolicyEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE"
,    Acquire = "ACQUIRE"
}

export enum DeploymentmanagerDeploymentsPatchDeletePolicyEnum {
    Delete = "DELETE"
,    Abandon = "ABANDON"
}


export class DeploymentmanagerDeploymentsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createPolicy" })
  createPolicy?: DeploymentmanagerDeploymentsPatchCreatePolicyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deletePolicy" })
  deletePolicy?: DeploymentmanagerDeploymentsPatchDeletePolicyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DeploymentmanagerDeploymentsPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerDeploymentsPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerDeploymentsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeploymentmanagerDeploymentsPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeploymentmanagerDeploymentsPatchSecurityOption2;
}


export class DeploymentmanagerDeploymentsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeploymentmanagerDeploymentsPatchPathParams;

  @Metadata()
  queryParams: DeploymentmanagerDeploymentsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Deployment;

  @Metadata()
  security: DeploymentmanagerDeploymentsPatchSecurity;
}


export class DeploymentmanagerDeploymentsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
