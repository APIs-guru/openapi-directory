import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesDisablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceusageServicesDisableQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesDisableSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesDisableSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesDisableSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesDisableSecurityOption1;
    option2?: ServiceusageServicesDisableSecurityOption2;
}
export declare class ServiceusageServicesDisableRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesDisablePathParams;
    queryParams: ServiceusageServicesDisableQueryParams;
    request?: Map<string, any>;
    security: ServiceusageServicesDisableSecurity;
}
export declare class ServiceusageServicesDisableResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
