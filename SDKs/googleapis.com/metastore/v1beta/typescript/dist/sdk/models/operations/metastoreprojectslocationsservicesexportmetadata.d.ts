import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesExportMetadataPathParams extends SpeakeasyBase {
    service: string;
}
export declare class MetastoreProjectsLocationsServicesExportMetadataQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesExportMetadataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesExportMetadataRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesExportMetadataPathParams;
    queryParams: MetastoreProjectsLocationsServicesExportMetadataQueryParams;
    request?: shared.ExportMetadataRequest;
    security: MetastoreProjectsLocationsServicesExportMetadataSecurity;
}
export declare class MetastoreProjectsLocationsServicesExportMetadataResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
