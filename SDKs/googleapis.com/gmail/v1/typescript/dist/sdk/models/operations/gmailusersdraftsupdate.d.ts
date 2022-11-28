import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersDraftsUpdatePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersDraftsUpdateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersDraftsUpdateRequests extends SpeakeasyBase {
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
export declare class GmailUsersDraftsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsUpdateSecurity extends SpeakeasyBase {
    option1?: GmailUsersDraftsUpdateSecurityOption1;
    option2?: GmailUsersDraftsUpdateSecurityOption2;
    option3?: GmailUsersDraftsUpdateSecurityOption3;
    option4?: GmailUsersDraftsUpdateSecurityOption4;
}
export declare class GmailUsersDraftsUpdateRequest extends SpeakeasyBase {
    pathParams: GmailUsersDraftsUpdatePathParams;
    queryParams: GmailUsersDraftsUpdateQueryParams;
    request?: GmailUsersDraftsUpdateRequests;
    security: GmailUsersDraftsUpdateSecurity;
}
export declare class GmailUsersDraftsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    draft?: shared.Draft;
    statusCode: number;
}
