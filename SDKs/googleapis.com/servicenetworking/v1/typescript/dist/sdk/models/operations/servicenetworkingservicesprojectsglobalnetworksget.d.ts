import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeUsedIpRanges?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1;
    option2?: ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesProjectsGlobalNetworksGetPathParams;
    queryParams: ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams;
    security: ServicenetworkingServicesProjectsGlobalNetworksGetSecurity;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksGetResponse extends SpeakeasyBase {
    consumerConfig?: shared.ConsumerConfig;
    contentType: string;
    statusCode: number;
}
