import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingOperationsCancelSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingOperationsCancelSecurityOption1;
    option2?: ServicenetworkingOperationsCancelSecurityOption2;
}
export declare class ServicenetworkingOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingOperationsCancelPathParams;
    queryParams: ServicenetworkingOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: ServicenetworkingOperationsCancelSecurity;
}
export declare class ServicenetworkingOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
