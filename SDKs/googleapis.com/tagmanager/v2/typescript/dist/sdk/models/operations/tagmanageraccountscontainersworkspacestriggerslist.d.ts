import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesTriggersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesTriggersListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesTriggersListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesTriggersListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    listTriggersResponse?: shared.ListTriggersResponse;
    statusCode: number;
}
