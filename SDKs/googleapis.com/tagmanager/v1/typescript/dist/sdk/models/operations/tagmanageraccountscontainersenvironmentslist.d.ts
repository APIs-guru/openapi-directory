import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersEnvironmentsListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersEnvironmentsListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersEnvironmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersEnvironmentsListSecurityOption1;
    option2?: TagmanagerAccountsContainersEnvironmentsListSecurityOption2;
}
export declare class TagmanagerAccountsContainersEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersEnvironmentsListPathParams;
    queryParams: TagmanagerAccountsContainersEnvironmentsListQueryParams;
    security: TagmanagerAccountsContainersEnvironmentsListSecurity;
}
export declare class TagmanagerAccountsContainersEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listEnvironmentsResponse?: shared.ListEnvironmentsResponse;
    statusCode: number;
}
