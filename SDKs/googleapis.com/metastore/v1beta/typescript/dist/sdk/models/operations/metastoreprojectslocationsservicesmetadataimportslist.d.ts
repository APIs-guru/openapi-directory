import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesMetadataImportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsListRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesMetadataImportsListPathParams;
    queryParams: MetastoreProjectsLocationsServicesMetadataImportsListQueryParams;
    security: MetastoreProjectsLocationsServicesMetadataImportsListSecurity;
}
export declare class MetastoreProjectsLocationsServicesMetadataImportsListResponse extends SpeakeasyBase {
    contentType: string;
    listMetadataImportsResponse?: shared.ListMetadataImportsResponse;
    statusCode: number;
}
