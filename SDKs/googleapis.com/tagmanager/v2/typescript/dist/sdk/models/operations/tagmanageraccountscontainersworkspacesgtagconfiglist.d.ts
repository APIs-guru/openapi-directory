import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesGtagConfigListResponse extends SpeakeasyBase {
    contentType: string;
    listGtagConfigResponse?: shared.ListGtagConfigResponse;
    statusCode: number;
}
