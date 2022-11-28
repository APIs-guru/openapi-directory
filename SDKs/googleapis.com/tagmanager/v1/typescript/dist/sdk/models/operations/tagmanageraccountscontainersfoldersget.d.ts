import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersFoldersGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    folderId: string;
}
export declare class TagmanagerAccountsContainersFoldersGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersFoldersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersFoldersGetSecurityOption1;
    option2?: TagmanagerAccountsContainersFoldersGetSecurityOption2;
}
export declare class TagmanagerAccountsContainersFoldersGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersFoldersGetPathParams;
    queryParams: TagmanagerAccountsContainersFoldersGetQueryParams;
    security: TagmanagerAccountsContainersFoldersGetSecurity;
}
export declare class TagmanagerAccountsContainersFoldersGetResponse extends SpeakeasyBase {
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
