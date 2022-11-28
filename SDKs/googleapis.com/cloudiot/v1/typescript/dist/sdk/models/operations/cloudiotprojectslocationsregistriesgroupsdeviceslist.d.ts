import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum {
    GatewayTypeUnspecified = "GATEWAY_TYPE_UNSPECIFIED",
    Gateway = "GATEWAY",
    NonGateway = "NON_GATEWAY"
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deviceIds?: string[];
    deviceNumIds?: string[];
    fieldMask?: string;
    fields?: string;
    gatewayListOptionsAssociationsDeviceId?: string;
    gatewayListOptionsAssociationsGatewayId?: string;
    gatewayListOptionsGatewayType?: CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams;
    security: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
}
