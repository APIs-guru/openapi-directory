import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesMetadataImportsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesMetadataImportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsGetRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesMetadataImportsGetPathParams;
    queryParams: MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams;
    security: MetastoreProjectsLocationsServicesMetadataImportsGetSecurity;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsGetResponse extends SpeakeasyBase {
    contentType: string;
    metadataImport?: shared.MetadataImport;
    statusCode: number;
}
