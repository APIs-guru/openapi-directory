import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TagmanagerAccountsContainersListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersListSecurityOption1;
    option2?: TagmanagerAccountsContainersListSecurityOption2;
}
export declare class TagmanagerAccountsContainersListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersListPathParams;
    queryParams: TagmanagerAccountsContainersListQueryParams;
    security: TagmanagerAccountsContainersListSecurity;
}
export declare class TagmanagerAccountsContainersListResponse extends SpeakeasyBase {
    contentType: string;
    listContainersResponse?: shared.ListContainersResponse;
    statusCode: number;
}
