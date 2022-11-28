import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersFoldersListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersFoldersListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersFoldersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersFoldersListSecurityOption1;
    option2?: TagmanagerAccountsContainersFoldersListSecurityOption2;
}
export declare class TagmanagerAccountsContainersFoldersListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersFoldersListPathParams;
    queryParams: TagmanagerAccountsContainersFoldersListQueryParams;
    security: TagmanagerAccountsContainersFoldersListSecurity;
}
export declare class TagmanagerAccountsContainersFoldersListResponse extends SpeakeasyBase {
    contentType: string;
    listFoldersResponse?: shared.ListFoldersResponse;
    statusCode: number;
}
