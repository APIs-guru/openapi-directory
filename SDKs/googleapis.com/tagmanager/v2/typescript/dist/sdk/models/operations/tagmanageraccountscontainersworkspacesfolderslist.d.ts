import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesFoldersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesFoldersListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesFoldersListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesFoldersListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersListResponse extends SpeakeasyBase {
    contentType: string;
    listFoldersResponse?: shared.ListFoldersResponse;
    statusCode: number;
}
