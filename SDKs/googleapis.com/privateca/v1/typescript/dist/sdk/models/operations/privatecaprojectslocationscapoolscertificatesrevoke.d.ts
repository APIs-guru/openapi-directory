import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesRevokePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesRevokeQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificatesRevokePathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificatesRevokeQueryParams;
    request?: shared.RevokeCertificateRequest;
    security: PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
