import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesGetStatusPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesGetStatusQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesGetStatusSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesGetStatusRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesGetStatusPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesGetStatusQueryParams;
    security: TagmanagerAccountsContainersWorkspacesGetStatusSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesGetStatusResponse extends SpeakeasyBase {
    contentType: string;
    getWorkspaceStatusResponse?: shared.GetWorkspaceStatusResponse;
    statusCode: number;
}
