import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IapProjectsIapTunnelLocationsDestGroupsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsGetRequest extends SpeakeasyBase {
    pathParams: IapProjectsIapTunnelLocationsDestGroupsGetPathParams;
    queryParams: IapProjectsIapTunnelLocationsDestGroupsGetQueryParams;
    security: IapProjectsIapTunnelLocationsDestGroupsGetSecurity;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunnelDestGroup?: shared.TunnelDestGroup;
}
