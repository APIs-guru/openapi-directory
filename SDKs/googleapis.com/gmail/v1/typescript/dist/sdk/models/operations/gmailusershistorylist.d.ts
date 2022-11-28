import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersHistoryListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum GmailUsersHistoryListHistoryTypesEnum {
    MessageAdded = "messageAdded",
    MessageDeleted = "messageDeleted",
    LabelAdded = "labelAdded",
    LabelRemoved = "labelRemoved"
}
export declare class GmailUsersHistoryListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    historyTypes?: GmailUsersHistoryListHistoryTypesEnum[];
    key?: string;
    labelId?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startHistoryId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersHistoryListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersHistoryListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersHistoryListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersHistoryListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersHistoryListSecurity extends SpeakeasyBase {
    option1?: GmailUsersHistoryListSecurityOption1;
    option2?: GmailUsersHistoryListSecurityOption2;
    option3?: GmailUsersHistoryListSecurityOption3;
    option4?: GmailUsersHistoryListSecurityOption4;
}
export declare class GmailUsersHistoryListRequest extends SpeakeasyBase {
    pathParams: GmailUsersHistoryListPathParams;
    queryParams: GmailUsersHistoryListQueryParams;
    security: GmailUsersHistoryListSecurity;
}
export declare class GmailUsersHistoryListResponse extends SpeakeasyBase {
    contentType: string;
    listHistoryResponse?: shared.ListHistoryResponse;
    statusCode: number;
}
