import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersThreadsUntrashPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersThreadsUntrashQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersThreadsUntrashSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsUntrashSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsUntrashSecurity extends SpeakeasyBase {
    option1?: GmailUsersThreadsUntrashSecurityOption1;
    option2?: GmailUsersThreadsUntrashSecurityOption2;
}
export declare class GmailUsersThreadsUntrashRequest extends SpeakeasyBase {
    pathParams: GmailUsersThreadsUntrashPathParams;
    queryParams: GmailUsersThreadsUntrashQueryParams;
    security: GmailUsersThreadsUntrashSecurity;
}
export declare class GmailUsersThreadsUntrashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thread?: shared.Thread;
}
