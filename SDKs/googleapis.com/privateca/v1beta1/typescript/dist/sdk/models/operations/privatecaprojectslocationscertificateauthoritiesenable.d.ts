import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesEnablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesEnableQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesEnableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesEnablePathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesEnableQueryParams;
    request?: shared.EnableCertificateAuthorityRequest;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesEnableSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesEnableResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
