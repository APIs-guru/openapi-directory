import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersDraftsSendPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersDraftsSendQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersDraftsSendRequests extends SpeakeasyBase {
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
export declare class GmailUsersDraftsSendSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsSendSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsSendSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsSendSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsSendSecurity extends SpeakeasyBase {
    option1?: GmailUsersDraftsSendSecurityOption1;
    option2?: GmailUsersDraftsSendSecurityOption2;
    option3?: GmailUsersDraftsSendSecurityOption3;
    option4?: GmailUsersDraftsSendSecurityOption4;
}
export declare class GmailUsersDraftsSendRequest extends SpeakeasyBase {
    pathParams: GmailUsersDraftsSendPathParams;
    queryParams: GmailUsersDraftsSendQueryParams;
    request?: GmailUsersDraftsSendRequests;
    security: GmailUsersDraftsSendSecurity;
}
export declare class GmailUsersDraftsSendResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
