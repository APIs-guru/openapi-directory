import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IapProjectsIapTunnelLocationsDestGroupsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsPatchRequest extends SpeakeasyBase {
    pathParams: IapProjectsIapTunnelLocationsDestGroupsPatchPathParams;
    queryParams: IapProjectsIapTunnelLocationsDestGroupsPatchQueryParams;
    request?: shared.TunnelDestGroup;
    security: IapProjectsIapTunnelLocationsDestGroupsPatchSecurity;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunnelDestGroup?: shared.TunnelDestGroup;
}
