import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesVariablesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesVariablesListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesVariablesListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesVariablesListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesListResponse extends SpeakeasyBase {
    contentType: string;
    listVariablesResponse?: shared.ListVariablesResponse;
    statusCode: number;
}
