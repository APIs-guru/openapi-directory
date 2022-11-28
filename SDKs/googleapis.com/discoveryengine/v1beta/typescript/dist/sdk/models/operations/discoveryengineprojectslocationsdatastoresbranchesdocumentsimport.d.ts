import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams;
    request?: shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequest;
    security: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
