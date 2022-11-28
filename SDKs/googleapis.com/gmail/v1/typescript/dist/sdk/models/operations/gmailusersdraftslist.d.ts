import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersDraftsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersDraftsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeSpamTrash?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    q?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersDraftsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsListSecurity extends SpeakeasyBase {
    option1?: GmailUsersDraftsListSecurityOption1;
    option2?: GmailUsersDraftsListSecurityOption2;
    option3?: GmailUsersDraftsListSecurityOption3;
    option4?: GmailUsersDraftsListSecurityOption4;
}
export declare class GmailUsersDraftsListRequest extends SpeakeasyBase {
    pathParams: GmailUsersDraftsListPathParams;
    queryParams: GmailUsersDraftsListQueryParams;
    security: GmailUsersDraftsListSecurity;
}
export declare class GmailUsersDraftsListResponse extends SpeakeasyBase {
    contentType: string;
    listDraftsResponse?: shared.ListDraftsResponse;
    statusCode: number;
}
