import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesSyncPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesSyncQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesSyncSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesSyncRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesSyncPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesSyncQueryParams;
    security: TagmanagerAccountsContainersWorkspacesSyncSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncWorkspaceResponse?: shared.SyncWorkspaceResponse;
}
