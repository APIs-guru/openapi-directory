import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesConnectionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingServicesConnectionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicenetworkingServicesConnectionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsPatchSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesConnectionsPatchSecurityOption1;
    option2?: ServicenetworkingServicesConnectionsPatchSecurityOption2;
}
export declare class ServicenetworkingServicesConnectionsPatchRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesConnectionsPatchPathParams;
    queryParams: ServicenetworkingServicesConnectionsPatchQueryParams;
    request?: shared.ConnectionInput;
    security: ServicenetworkingServicesConnectionsPatchSecurity;
}
export declare class ServicenetworkingServicesConnectionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
