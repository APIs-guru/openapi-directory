import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeGoogleTags?: boolean;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsListSecurityOption1;
    option2?: TagmanagerAccountsListSecurityOption2;
    option3?: TagmanagerAccountsListSecurityOption3;
}
export declare class TagmanagerAccountsListRequest extends SpeakeasyBase {
    queryParams: TagmanagerAccountsListQueryParams;
    security: TagmanagerAccountsListSecurity;
}
export declare class TagmanagerAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listAccountsResponse?: shared.ListAccountsResponse;
    statusCode: number;
}
