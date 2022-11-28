import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesValidatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesValidateQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesValidateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesValidateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesValidateSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesValidateSecurityOption1;
    option2?: ServicenetworkingServicesValidateSecurityOption2;
}
export declare class ServicenetworkingServicesValidateRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesValidatePathParams;
    queryParams: ServicenetworkingServicesValidateQueryParams;
    request?: shared.ValidateConsumerConfigRequest;
    security: ServicenetworkingServicesValidateSecurity;
}
export declare class ServicenetworkingServicesValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateConsumerConfigResponse?: shared.ValidateConsumerConfigResponse;
}
