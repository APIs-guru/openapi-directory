import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesListResponse extends SpeakeasyBase {
    contentType: string;
    listWorkspacesResponse?: shared.ListWorkspacesResponse;
    statusCode: number;
}
