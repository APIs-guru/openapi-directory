import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1;
    option2?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams;
    queryParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams;
    security: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
