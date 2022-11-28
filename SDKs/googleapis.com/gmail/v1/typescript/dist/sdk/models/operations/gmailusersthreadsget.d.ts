import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersThreadsGetPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare enum GmailUsersThreadsGetFormatEnum {
    Full = "full",
    Metadata = "metadata",
    Minimal = "minimal"
}
export declare class GmailUsersThreadsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    format?: GmailUsersThreadsGetFormatEnum;
    key?: string;
    metadataHeaders?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersThreadsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersThreadsGetSecurityOption1;
    option2?: GmailUsersThreadsGetSecurityOption2;
    option3?: GmailUsersThreadsGetSecurityOption3;
    option4?: GmailUsersThreadsGetSecurityOption4;
    option5?: GmailUsersThreadsGetSecurityOption5;
    option6?: GmailUsersThreadsGetSecurityOption6;
    option7?: GmailUsersThreadsGetSecurityOption7;
}
export declare class GmailUsersThreadsGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersThreadsGetPathParams;
    queryParams: GmailUsersThreadsGetQueryParams;
    security: GmailUsersThreadsGetSecurity;
}
export declare class GmailUsersThreadsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thread?: shared.Thread;
}
