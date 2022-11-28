import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingOperationsGetSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingOperationsGetSecurityOption1;
    option2?: ServicenetworkingOperationsGetSecurityOption2;
}
export declare class ServicenetworkingOperationsGetRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingOperationsGetPathParams;
    queryParams: ServicenetworkingOperationsGetQueryParams;
    security: ServicenetworkingOperationsGetSecurity;
}
export declare class ServicenetworkingOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
