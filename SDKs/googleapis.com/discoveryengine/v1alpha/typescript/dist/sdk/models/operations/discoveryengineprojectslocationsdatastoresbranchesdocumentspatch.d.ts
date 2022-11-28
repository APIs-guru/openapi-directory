import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
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
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams;
    request?: shared.GoogleCloudDiscoveryengineV1alphaDocument;
    security: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDiscoveryengineV1alphaDocument?: shared.GoogleCloudDiscoveryengineV1alphaDocument;
    statusCode: number;
}
