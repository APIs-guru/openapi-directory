import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesTemplatesListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesTemplatesListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesTemplatesListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    listTemplatesResponse?: shared.ListTemplatesResponse;
    statusCode: number;
}
