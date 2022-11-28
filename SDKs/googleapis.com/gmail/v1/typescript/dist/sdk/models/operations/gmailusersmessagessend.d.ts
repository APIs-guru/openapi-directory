import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesSendPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersMessagesSendQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesSendRequests extends SpeakeasyBase {
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
export declare class GmailUsersMessagesSendSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesSendSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesSendSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesSendSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesSendSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesSendSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesSendSecurityOption1;
    option2?: GmailUsersMessagesSendSecurityOption2;
    option3?: GmailUsersMessagesSendSecurityOption3;
    option4?: GmailUsersMessagesSendSecurityOption4;
    option5?: GmailUsersMessagesSendSecurityOption5;
}
export declare class GmailUsersMessagesSendRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesSendPathParams;
    queryParams: GmailUsersMessagesSendQueryParams;
    request?: GmailUsersMessagesSendRequests;
    security: GmailUsersMessagesSendSecurity;
}
export declare class GmailUsersMessagesSendResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
