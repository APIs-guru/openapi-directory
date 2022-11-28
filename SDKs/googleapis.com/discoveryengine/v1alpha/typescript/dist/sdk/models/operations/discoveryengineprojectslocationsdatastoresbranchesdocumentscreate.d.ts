import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    documentId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams;
    request?: shared.GoogleCloudDiscoveryengineV1alphaDocument;
    security: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDiscoveryengineV1alphaDocument?: shared.GoogleCloudDiscoveryengineV1alphaDocument;
    statusCode: number;
}
