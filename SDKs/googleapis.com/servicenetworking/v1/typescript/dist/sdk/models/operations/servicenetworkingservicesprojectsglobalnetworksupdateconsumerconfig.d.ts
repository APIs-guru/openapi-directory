import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1;
    option2?: ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams;
    queryParams: ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams;
    request?: shared.UpdateConsumerConfigRequestInput;
    security: ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
