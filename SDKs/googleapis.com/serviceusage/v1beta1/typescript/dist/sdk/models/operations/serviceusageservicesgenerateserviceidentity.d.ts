import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesGenerateServiceIdentityPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesGenerateServiceIdentityQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesGenerateServiceIdentitySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesGenerateServiceIdentitySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesGenerateServiceIdentitySecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesGenerateServiceIdentitySecurityOption1;
    option2?: ServiceusageServicesGenerateServiceIdentitySecurityOption2;
}
export declare class ServiceusageServicesGenerateServiceIdentityRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesGenerateServiceIdentityPathParams;
    queryParams: ServiceusageServicesGenerateServiceIdentityQueryParams;
    security: ServiceusageServicesGenerateServiceIdentitySecurity;
}
export declare class ServiceusageServicesGenerateServiceIdentityResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
