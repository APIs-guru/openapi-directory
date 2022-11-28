import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeletePathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteQueryParams;
    request?: shared.ScheduleDeleteCertificateAuthorityRequest;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
