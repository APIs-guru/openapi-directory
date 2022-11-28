import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListPathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListQueryParams;
    security: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDiscoveryengineV1betaListDocumentsResponse?: shared.GoogleCloudDiscoveryengineV1betaListDocumentsResponse;
    statusCode: number;
}
