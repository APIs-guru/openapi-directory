import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numStates" })
  numStates?: number;

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


export class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams;

  @SpeakeasyMetadata()
  security: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity;
}


export class CloudiotProjectsLocationsRegistriesDevicesStatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeviceStatesResponse?: shared.ListDeviceStatesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
