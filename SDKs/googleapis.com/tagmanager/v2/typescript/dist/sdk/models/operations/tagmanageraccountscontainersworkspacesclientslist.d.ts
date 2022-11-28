import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesClientsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesClientsListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesClientsListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesClientsListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsListResponse extends SpeakeasyBase {
    contentType: string;
    listClientsResponse?: shared.ListClientsResponse;
    statusCode: number;
}
