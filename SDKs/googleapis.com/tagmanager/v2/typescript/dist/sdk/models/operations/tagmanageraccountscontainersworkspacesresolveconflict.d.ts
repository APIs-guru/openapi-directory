import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesResolveConflictPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersWorkspacesResolveConflictSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesResolveConflictRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesResolveConflictPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams;
    request?: shared.Entity;
    security: TagmanagerAccountsContainersWorkspacesResolveConflictSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesResolveConflictResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
