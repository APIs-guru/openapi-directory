import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse extends SpeakeasyBase {
    contentType: string;
    listEnabledBuiltInVariablesResponse?: shared.ListEnabledBuiltInVariablesResponse;
    statusCode: number;
}
