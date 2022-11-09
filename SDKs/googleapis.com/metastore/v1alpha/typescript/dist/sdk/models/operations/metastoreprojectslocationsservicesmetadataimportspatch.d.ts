import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsPatchRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams;
    queryParams: MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams;
    request?: shared.MetadataImport;
    security: MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
