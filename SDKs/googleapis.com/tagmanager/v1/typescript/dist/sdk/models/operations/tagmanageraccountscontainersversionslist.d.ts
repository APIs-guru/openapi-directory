import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    headers?: boolean;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVersionsListSecurityOption1;
    option2?: TagmanagerAccountsContainersVersionsListSecurityOption2;
    option3?: TagmanagerAccountsContainersVersionsListSecurityOption3;
}
export declare class TagmanagerAccountsContainersVersionsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsListPathParams;
    queryParams: TagmanagerAccountsContainersVersionsListQueryParams;
    security: TagmanagerAccountsContainersVersionsListSecurity;
}
export declare class TagmanagerAccountsContainersVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listContainerVersionsResponse?: shared.ListContainerVersionsResponse;
    statusCode: number;
}
