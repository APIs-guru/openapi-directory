import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams extends SpeakeasyBase {
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


export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2;
}


export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TestIamPermissionsRequest;

  @SpeakeasyMetadata()
  security: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity;
}


export class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
