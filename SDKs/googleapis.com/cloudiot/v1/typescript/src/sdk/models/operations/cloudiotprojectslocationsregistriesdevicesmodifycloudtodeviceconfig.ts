import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams extends SpeakeasyBase {
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


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams;

  @Metadata()
  queryParams: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCloudToDeviceConfigRequest;

  @Metadata()
  security: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity;
}


export class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceConfig?: shared.DeviceConfig;

  @Metadata()
  statusCode: number;
}
