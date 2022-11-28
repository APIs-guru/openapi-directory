import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersMessagesListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesListSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesListSecurityOption1;
    option2?: GmailUsersMessagesListSecurityOption2;
    option3?: GmailUsersMessagesListSecurityOption3;
    option4?: GmailUsersMessagesListSecurityOption4;
}
export declare class GmailUsersMessagesListRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesListPathParams;
    queryParams: GmailUsersMessagesListQueryParams;
    security: GmailUsersMessagesListSecurity;
}
export declare class GmailUsersMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    listMessagesResponse?: shared.ListMessagesResponse;
    statusCode: number;
}
