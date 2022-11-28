import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersMoveFoldersUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    folderId: string;
}
export declare class TagmanagerAccountsContainersMoveFoldersUpdateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersMoveFoldersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersMoveFoldersUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersMoveFoldersUpdatePathParams;
    queryParams: TagmanagerAccountsContainersMoveFoldersUpdateQueryParams;
    request?: shared.Folder;
    security: TagmanagerAccountsContainersMoveFoldersUpdateSecurity;
}
export declare class TagmanagerAccountsContainersMoveFoldersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
