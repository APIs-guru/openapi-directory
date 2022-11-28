import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesCreateQueryParams;
    request?: shared.Workspace;
    security: TagmanagerAccountsContainersWorkspacesCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workspace?: shared.Workspace;
}
