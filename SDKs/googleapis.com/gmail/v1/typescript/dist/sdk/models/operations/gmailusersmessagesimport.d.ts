import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesImportPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum GmailUsersMessagesImportInternalDateSourceEnum {
    ReceivedTime = "receivedTime",
    DateHeader = "dateHeader"
}
export declare class GmailUsersMessagesImportQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deleted?: boolean;
    fields?: string;
    internalDateSource?: GmailUsersMessagesImportInternalDateSourceEnum;
    key?: string;
    neverMarkSpam?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    processForCalendar?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersMessagesImportRequests extends SpeakeasyBase {
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
export declare class GmailUsersMessagesImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesImportSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesImportSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesImportSecurityOption1;
    option2?: GmailUsersMessagesImportSecurityOption2;
    option3?: GmailUsersMessagesImportSecurityOption3;
}
export declare class GmailUsersMessagesImportRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesImportPathParams;
    queryParams: GmailUsersMessagesImportQueryParams;
    request?: GmailUsersMessagesImportRequests;
    security: GmailUsersMessagesImportSecurity;
}
export declare class GmailUsersMessagesImportResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
