import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeploymentmanagerDeploymentsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment" })
  deployment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export enum DeploymentmanagerDeploymentsPatchCreatePolicyEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Acquire = "ACQUIRE",
    Create = "CREATE"
}

export enum DeploymentmanagerDeploymentsPatchDeletePolicyEnum {
    Delete = "DELETE",
    Abandon = "ABANDON"
}


export class DeploymentmanagerDeploymentsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createPolicy" })
  createPolicy?: DeploymentmanagerDeploymentsPatchCreatePolicyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletePolicy" })
  deletePolicy?: DeploymentmanagerDeploymentsPatchDeletePolicyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DeploymentmanagerDeploymentsPatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerDeploymentsPatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerDeploymentsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DeploymentmanagerDeploymentsPatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DeploymentmanagerDeploymentsPatchSecurityOption2;
}


export class DeploymentmanagerDeploymentsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeploymentmanagerDeploymentsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: DeploymentmanagerDeploymentsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Deployment;

  @SpeakeasyMetadata()
  security: DeploymentmanagerDeploymentsPatchSecurity;
}


export class DeploymentmanagerDeploymentsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
