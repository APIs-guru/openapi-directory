import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesConnectionsDeleteConnectionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingServicesConnectionsDeleteConnectionQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsDeleteConnectionSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1;
    option2?: ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption2;
}
export declare class ServicenetworkingServicesConnectionsDeleteConnectionRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesConnectionsDeleteConnectionPathParams;
    queryParams: ServicenetworkingServicesConnectionsDeleteConnectionQueryParams;
    request?: shared.DeleteConnectionRequest;
    security: ServicenetworkingServicesConnectionsDeleteConnectionSecurity;
}
export declare class ServicenetworkingServicesConnectionsDeleteConnectionResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
