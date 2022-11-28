import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapProjectsIapTunnelLocationsDestGroupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tunnelDestGroupId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsCreateRequest extends SpeakeasyBase {
    pathParams: IapProjectsIapTunnelLocationsDestGroupsCreatePathParams;
    queryParams: IapProjectsIapTunnelLocationsDestGroupsCreateQueryParams;
    request?: shared.TunnelDestGroup;
    security: IapProjectsIapTunnelLocationsDestGroupsCreateSecurity;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunnelDestGroup?: shared.TunnelDestGroup;
}
