import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesEnablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceusageServicesEnableQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesEnableSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesEnableSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesEnableSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesEnableSecurityOption1;
    option2?: ServiceusageServicesEnableSecurityOption2;
}
export declare class ServiceusageServicesEnableRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesEnablePathParams;
    queryParams: ServiceusageServicesEnableQueryParams;
    request?: Map<string, any>;
    security: ServiceusageServicesEnableSecurity;
}
export declare class ServiceusageServicesEnableResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
