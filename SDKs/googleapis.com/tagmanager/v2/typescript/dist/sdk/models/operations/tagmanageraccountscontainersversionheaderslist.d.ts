import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionHeadersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersVersionHeadersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersVersionHeadersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionHeadersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionHeadersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionHeadersListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVersionHeadersListSecurityOption1;
    option2?: TagmanagerAccountsContainersVersionHeadersListSecurityOption2;
    option3?: TagmanagerAccountsContainersVersionHeadersListSecurityOption3;
}
export declare class TagmanagerAccountsContainersVersionHeadersListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionHeadersListPathParams;
    queryParams: TagmanagerAccountsContainersVersionHeadersListQueryParams;
    security: TagmanagerAccountsContainersVersionHeadersListSecurity;
}
export declare class TagmanagerAccountsContainersVersionHeadersListResponse extends SpeakeasyBase {
    contentType: string;
    listContainerVersionsResponse?: shared.ListContainerVersionsResponse;
    statusCode: number;
}
