import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTagsListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersTagsListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTagsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersTagsListSecurityOption1;
    option2?: TagmanagerAccountsContainersTagsListSecurityOption2;
}
export declare class TagmanagerAccountsContainersTagsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTagsListPathParams;
    queryParams: TagmanagerAccountsContainersTagsListQueryParams;
    security: TagmanagerAccountsContainersTagsListSecurity;
}
export declare class TagmanagerAccountsContainersTagsListResponse extends SpeakeasyBase {
    contentType: string;
    listTagsResponse?: shared.ListTagsResponse;
    statusCode: number;
}
