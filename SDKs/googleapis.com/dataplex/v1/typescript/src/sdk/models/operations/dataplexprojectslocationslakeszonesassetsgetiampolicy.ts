import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" })
  optionsRequestedPolicyVersion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyPathParams;

  @Metadata()
  queryParams: DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyQueryParams;

  @Metadata()
  security: DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity;
}


export class DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleIamV1Policy?: shared.GoogleIamV1Policy;

  @Metadata()
  statusCode: number;
}
