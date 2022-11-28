import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum {
    FileFormatUnspecified = "FILE_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Yaml = "YAML"
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fileFormat?: IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse?: shared.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse;
    statusCode: number;
}
