import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeploymentmanagerTypeProvidersPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" })
  typeProvider: string;
}


export class DeploymentmanagerTypeProvidersPatchQueryParams extends SpeakeasyBase {
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


export class DeploymentmanagerTypeProvidersPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerTypeProvidersPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DeploymentmanagerTypeProvidersPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeploymentmanagerTypeProvidersPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeploymentmanagerTypeProvidersPatchSecurityOption2;
}


export class DeploymentmanagerTypeProvidersPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeploymentmanagerTypeProvidersPatchPathParams;

  @Metadata()
  queryParams: DeploymentmanagerTypeProvidersPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.TypeProvider;

  @Metadata()
  security: DeploymentmanagerTypeProvidersPatchSecurity;
}


export class DeploymentmanagerTypeProvidersPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
