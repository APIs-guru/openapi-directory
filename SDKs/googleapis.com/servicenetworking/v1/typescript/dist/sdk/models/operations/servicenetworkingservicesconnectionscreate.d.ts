import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesConnectionsCreateQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesConnectionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsCreateSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesConnectionsCreateSecurityOption1;
    option2?: ServicenetworkingServicesConnectionsCreateSecurityOption2;
}
export declare class ServicenetworkingServicesConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesConnectionsCreatePathParams;
    queryParams: ServicenetworkingServicesConnectionsCreateQueryParams;
    request?: shared.ConnectionInput;
    security: ServicenetworkingServicesConnectionsCreateSecurity;
}
export declare class ServicenetworkingServicesConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
