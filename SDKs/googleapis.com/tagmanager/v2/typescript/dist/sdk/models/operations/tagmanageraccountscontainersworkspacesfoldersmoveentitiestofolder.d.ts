import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tagId?: string[];
    triggerId?: string[];
    uploadType?: string;
    uploadProtocol?: string;
    variableId?: string[];
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams;
    request?: shared.Folder;
    security: TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
