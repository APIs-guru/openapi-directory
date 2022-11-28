import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesUntrashPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersMessagesUntrashQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesUntrashSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesUntrashSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesUntrashSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesUntrashSecurityOption1;
    option2?: GmailUsersMessagesUntrashSecurityOption2;
}
export declare class GmailUsersMessagesUntrashRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesUntrashPathParams;
    queryParams: GmailUsersMessagesUntrashQueryParams;
    security: GmailUsersMessagesUntrashSecurity;
}
export declare class GmailUsersMessagesUntrashResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
