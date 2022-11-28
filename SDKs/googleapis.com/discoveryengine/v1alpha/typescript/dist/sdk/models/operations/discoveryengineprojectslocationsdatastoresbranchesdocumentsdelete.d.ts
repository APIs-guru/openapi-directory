import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams;
    security: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
