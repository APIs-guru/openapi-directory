import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesFoldersEntitiesPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesFoldersEntitiesQueryParams;
    security: TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    folderEntities?: shared.FolderEntities;
    statusCode: number;
}
