import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsGetPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TagmanagerAccountsGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsGetSecurityOption1;
    option2?: TagmanagerAccountsGetSecurityOption2;
    option3?: TagmanagerAccountsGetSecurityOption3;
}
export declare class TagmanagerAccountsGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsGetPathParams;
    queryParams: TagmanagerAccountsGetQueryParams;
    security: TagmanagerAccountsGetSecurity;
}
export declare class TagmanagerAccountsGetResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
