import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum {
    GatewayTypeUnspecified = "GATEWAY_TYPE_UNSPECIFIED"
,    Gateway = "GATEWAY"
,    NonGateway = "NON_GATEWAY"
}


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceIds" })
  deviceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceNumIds" })
  deviceNumIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fieldMask" })
  fieldMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gatewayListOptions.associationsDeviceId" })
  gatewayListOptionsAssociationsDeviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gatewayListOptions.associationsGatewayId" })
  gatewayListOptionsAssociationsGatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gatewayListOptions.gatewayType" })
  gatewayListOptionsGatewayType?: CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2;
}


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams;

  @Metadata()
  queryParams: CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams;

  @Metadata()
  security: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity;
}


export class CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDevicesResponse?: shared.ListDevicesResponse;

  @Metadata()
  statusCode: number;
}
