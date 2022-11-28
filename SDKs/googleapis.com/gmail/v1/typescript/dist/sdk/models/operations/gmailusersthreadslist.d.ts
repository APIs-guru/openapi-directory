import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersThreadsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersThreadsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeSpamTrash?: boolean;
    key?: string;
    labelIds?: string[];
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    q?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersThreadsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsListSecurity extends SpeakeasyBase {
    option1?: GmailUsersThreadsListSecurityOption1;
    option2?: GmailUsersThreadsListSecurityOption2;
    option3?: GmailUsersThreadsListSecurityOption3;
    option4?: GmailUsersThreadsListSecurityOption4;
}
export declare class GmailUsersThreadsListRequest extends SpeakeasyBase {
    pathParams: GmailUsersThreadsListPathParams;
    queryParams: GmailUsersThreadsListQueryParams;
    security: GmailUsersThreadsListSecurity;
}
export declare class GmailUsersThreadsListResponse extends SpeakeasyBase {
    contentType: string;
    listThreadsResponse?: shared.ListThreadsResponse;
    statusCode: number;
}
