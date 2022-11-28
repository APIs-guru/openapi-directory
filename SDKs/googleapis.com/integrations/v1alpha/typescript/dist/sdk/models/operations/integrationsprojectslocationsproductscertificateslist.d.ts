import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsCertificatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsCertificatesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsCertificatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsCertificatesListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsCertificatesListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsCertificatesListQueryParams;
    security: IntegrationsProjectsLocationsProductsCertificatesListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsCertificatesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListCertificatesResponse?: shared.GoogleCloudIntegrationsV1alphaListCertificatesResponse;
    statusCode: number;
}
