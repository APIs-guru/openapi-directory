import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1;
    option2?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams;
    queryParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams;
    request?: shared.PeeredDnsDomain;
    security: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
