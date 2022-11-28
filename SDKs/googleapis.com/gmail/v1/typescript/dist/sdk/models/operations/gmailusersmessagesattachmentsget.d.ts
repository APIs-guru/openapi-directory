import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesAttachmentsGetPathParams extends SpeakeasyBase {
    id: string;
    messageId: string;
    userId: string;
}
export declare class GmailUsersMessagesAttachmentsGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesAttachmentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesAttachmentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesAttachmentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesAttachmentsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesAttachmentsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesAttachmentsGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesAttachmentsGetSecurityOption1;
    option2?: GmailUsersMessagesAttachmentsGetSecurityOption2;
    option3?: GmailUsersMessagesAttachmentsGetSecurityOption3;
    option4?: GmailUsersMessagesAttachmentsGetSecurityOption4;
    option5?: GmailUsersMessagesAttachmentsGetSecurityOption5;
}
export declare class GmailUsersMessagesAttachmentsGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesAttachmentsGetPathParams;
    queryParams: GmailUsersMessagesAttachmentsGetQueryParams;
    security: GmailUsersMessagesAttachmentsGetSecurity;
}
export declare class GmailUsersMessagesAttachmentsGetResponse extends SpeakeasyBase {
    contentType: string;
    messagePartBody?: shared.MessagePartBody;
    statusCode: number;
}
