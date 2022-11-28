import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceusageOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageOperationsCancelSecurity extends SpeakeasyBase {
    option1?: ServiceusageOperationsCancelSecurityOption1;
    option2?: ServiceusageOperationsCancelSecurityOption2;
}
export declare class ServiceusageOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ServiceusageOperationsCancelPathParams;
    queryParams: ServiceusageOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: ServiceusageOperationsCancelSecurity;
}
export declare class ServiceusageOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
