import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeploymentmanagerDeploymentsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment" })
  deployment: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export enum DeploymentmanagerDeploymentsUpdateCreatePolicyEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE"
,    Acquire = "ACQUIRE"
,    Create = "CREATE"
}

export enum DeploymentmanagerDeploymentsUpdateDeletePolicyEnum {
    Delete = "DELETE"
,    Abandon = "ABANDON"
}


export class DeploymentmanagerDeploymentsUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createPolicy" })
  createPolicy?: DeploymentmanagerDeploymentsUpdateCreatePolicyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deletePolicy" })
  deletePolicy?: DeploymentmanagerDeploymentsUpdateDeletePolicyEnum;

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


export class DeploymentmanagerDeploymentsUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerDeploymentsUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerDeploymentsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeploymentmanagerDeploymentsUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeploymentmanagerDeploymentsUpdateSecurityOption2;
}


export class DeploymentmanagerDeploymentsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeploymentmanagerDeploymentsUpdatePathParams;

  @Metadata()
  queryParams: DeploymentmanagerDeploymentsUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Deployment;

  @Metadata()
  security: DeploymentmanagerDeploymentsUpdateSecurity;
}


export class DeploymentmanagerDeploymentsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
