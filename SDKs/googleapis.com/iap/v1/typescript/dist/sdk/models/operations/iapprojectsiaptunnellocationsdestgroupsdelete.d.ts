import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IapProjectsIapTunnelLocationsDestGroupsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams extends SpeakeasyBase {
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
export declare class IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: IapProjectsIapTunnelLocationsDestGroupsDeletePathParams;
    queryParams: IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams;
    security: IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
