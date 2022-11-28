import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientCertificatePassphrase?: string;
    clientCertificateSslCertificate?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput;
    security: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaSfdcChannel?: shared.GoogleCloudIntegrationsV1alphaSfdcChannel;
    statusCode: number;
}
