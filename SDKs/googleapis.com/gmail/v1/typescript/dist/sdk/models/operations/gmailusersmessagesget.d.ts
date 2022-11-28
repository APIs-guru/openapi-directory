import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesGetPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare enum GmailUsersMessagesGetFormatEnum {
    Minimal = "minimal",
    Full = "full",
    Raw = "raw",
    Metadata = "metadata"
}
export declare class GmailUsersMessagesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    format?: GmailUsersMessagesGetFormatEnum;
    key?: string;
    metadataHeaders?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersMessagesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesGetSecurityOption1;
    option2?: GmailUsersMessagesGetSecurityOption2;
    option3?: GmailUsersMessagesGetSecurityOption3;
    option4?: GmailUsersMessagesGetSecurityOption4;
    option5?: GmailUsersMessagesGetSecurityOption5;
    option6?: GmailUsersMessagesGetSecurityOption6;
    option7?: GmailUsersMessagesGetSecurityOption7;
}
export declare class GmailUsersMessagesGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesGetPathParams;
    queryParams: GmailUsersMessagesGetQueryParams;
    security: GmailUsersMessagesGetSecurity;
}
export declare class GmailUsersMessagesGetResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
