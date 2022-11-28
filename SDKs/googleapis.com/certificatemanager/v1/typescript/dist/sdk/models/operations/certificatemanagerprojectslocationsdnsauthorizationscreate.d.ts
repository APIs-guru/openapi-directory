import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dnsAuthorizationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams;
    queryParams: CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams;
    request?: shared.DnsAuthorizationInput;
    security: CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
