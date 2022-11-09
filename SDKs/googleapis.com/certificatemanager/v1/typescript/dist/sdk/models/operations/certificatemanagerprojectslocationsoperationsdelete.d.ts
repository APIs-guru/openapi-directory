import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CertificatemanagerProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsOperationsDeletePathParams;
    queryParams: CertificatemanagerProjectsLocationsOperationsDeleteQueryParams;
    security: CertificatemanagerProjectsLocationsOperationsDeleteSecurity;
}
export declare class CertificatemanagerProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
