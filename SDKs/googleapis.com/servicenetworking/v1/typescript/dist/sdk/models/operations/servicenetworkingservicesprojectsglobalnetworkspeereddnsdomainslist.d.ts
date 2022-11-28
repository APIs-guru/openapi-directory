import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1;
    option2?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams;
    queryParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams;
    security: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity;
}
export declare class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listPeeredDnsDomainsResponse?: shared.ListPeeredDnsDomainsResponse;
    statusCode: number;
}
