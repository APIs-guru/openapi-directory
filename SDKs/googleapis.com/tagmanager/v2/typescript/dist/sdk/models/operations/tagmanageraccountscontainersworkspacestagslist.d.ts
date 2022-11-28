import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesTagsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesTagsListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesTagsListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesTagsListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsListResponse extends SpeakeasyBase {
    contentType: string;
    listTagsResponse?: shared.ListTagsResponse;
    statusCode: number;
}
