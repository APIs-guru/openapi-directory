import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams extends SpeakeasyBase {
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


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCloudToDeviceConfigRequest;

  @SpeakeasyMetadata()
  security: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceConfig?: shared.DeviceConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
