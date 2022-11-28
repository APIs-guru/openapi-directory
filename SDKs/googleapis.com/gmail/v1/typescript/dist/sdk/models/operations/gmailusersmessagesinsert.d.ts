import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesInsertPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum GmailUsersMessagesInsertInternalDateSourceEnum {
    ReceivedTime = "receivedTime",
    DateHeader = "dateHeader"
}
export declare class GmailUsersMessagesInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deleted?: boolean;
    fields?: string;
    internalDateSource?: GmailUsersMessagesInsertInternalDateSourceEnum;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersMessagesInsertRequests extends SpeakeasyBase {
    messageCpim: Uint8Array;
    messageDeliveryStatus: Uint8Array;
    messageDispositionNotification: Uint8Array;
    messageExternalBody: Uint8Array;
    messageFeedbackReport: Uint8Array;
    messageGlobal: Uint8Array;
    messageGlobalDeliveryStatus: Uint8Array;
    messageGlobalDispositionNotification: Uint8Array;
    messageGlobalHeaders: Uint8Array;
    messageHttp: Uint8Array;
    messageImdnPlusXml: Uint8Array;
    messageNews: Uint8Array;
    messagePartial: Uint8Array;
    messageRfc822: Uint8Array;
    messageShttp: Uint8Array;
    messageSip: Uint8Array;
    messageSipfrag: Uint8Array;
    messageTrackingStatus: Uint8Array;
    messageVndSiSimp: Uint8Array;
    messageVndWfaWsc: Uint8Array;
}
export declare class GmailUsersMessagesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesInsertSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesInsertSecurityOption1;
    option2?: GmailUsersMessagesInsertSecurityOption2;
    option3?: GmailUsersMessagesInsertSecurityOption3;
}
export declare class GmailUsersMessagesInsertRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesInsertPathParams;
    queryParams: GmailUsersMessagesInsertQueryParams;
    request?: GmailUsersMessagesInsertRequests;
    security: GmailUsersMessagesInsertSecurity;
}
export declare class GmailUsersMessagesInsertResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
