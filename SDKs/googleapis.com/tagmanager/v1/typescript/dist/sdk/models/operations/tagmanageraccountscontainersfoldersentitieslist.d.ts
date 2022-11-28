import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersFoldersEntitiesListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    folderId: string;
}
export declare class TagmanagerAccountsContainersFoldersEntitiesListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersEntitiesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1;
    option2?: TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersFoldersEntitiesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersFoldersEntitiesListPathParams;
    queryParams: TagmanagerAccountsContainersFoldersEntitiesListQueryParams;
    security: TagmanagerAccountsContainersFoldersEntitiesListSecurity;
}
export declare class TagmanagerAccountsContainersFoldersEntitiesListResponse extends SpeakeasyBase {
    contentType: string;
    folderEntities?: shared.FolderEntities;
    statusCode: number;
}
