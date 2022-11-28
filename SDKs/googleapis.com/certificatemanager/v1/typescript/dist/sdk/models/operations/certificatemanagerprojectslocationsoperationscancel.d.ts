import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CertificatemanagerProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsOperationsCancelPathParams;
    queryParams: CertificatemanagerProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: CertificatemanagerProjectsLocationsOperationsCancelSecurity;
}
export declare class CertificatemanagerProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
