import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeploymentmanagerManifestsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment" })
  deployment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=manifest" })
  manifest: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class DeploymentmanagerManifestsGetQueryParams extends SpeakeasyBase {
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


export class DeploymentmanagerManifestsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerManifestsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerManifestsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerManifestsGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerManifestsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DeploymentmanagerManifestsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DeploymentmanagerManifestsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DeploymentmanagerManifestsGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DeploymentmanagerManifestsGetSecurityOption4;
}


export class DeploymentmanagerManifestsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeploymentmanagerManifestsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DeploymentmanagerManifestsGetQueryParams;

  @SpeakeasyMetadata()
  security: DeploymentmanagerManifestsGetSecurity;
}


export class DeploymentmanagerManifestsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  manifest?: shared.Manifest;

  @SpeakeasyMetadata()
  statusCode: number;
}
