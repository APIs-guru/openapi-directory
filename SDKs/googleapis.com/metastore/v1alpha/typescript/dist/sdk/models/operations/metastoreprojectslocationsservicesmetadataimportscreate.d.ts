import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    metadataImportId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsCreateRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams;
    queryParams: MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams;
    request?: shared.MetadataImportInput;
    security: MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
