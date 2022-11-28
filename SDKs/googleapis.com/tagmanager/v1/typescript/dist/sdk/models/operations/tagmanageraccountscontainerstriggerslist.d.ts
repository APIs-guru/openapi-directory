import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTriggersListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersTriggersListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTriggersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersTriggersListSecurityOption1;
    option2?: TagmanagerAccountsContainersTriggersListSecurityOption2;
}
export declare class TagmanagerAccountsContainersTriggersListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTriggersListPathParams;
    queryParams: TagmanagerAccountsContainersTriggersListQueryParams;
    security: TagmanagerAccountsContainersTriggersListSecurity;
}
export declare class TagmanagerAccountsContainersTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    listTriggersResponse?: shared.ListTriggersResponse;
    statusCode: number;
}
