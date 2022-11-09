import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=numStates" })
  numStates?: number;

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


export class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams;

  @Metadata()
  queryParams: CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams;

  @Metadata()
  security: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeviceStatesResponse?: shared.ListDeviceStatesResponse;

  @Metadata()
  statusCode: number;
}
