import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams;
    request?: shared.Folder;
    security: TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesFoldersCreateResponse extends SpeakeasyBase {
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
