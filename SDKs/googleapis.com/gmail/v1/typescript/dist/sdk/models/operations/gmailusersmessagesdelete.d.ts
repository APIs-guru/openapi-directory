import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesDeletePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersMessagesDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesDeletePathParams;
    queryParams: GmailUsersMessagesDeleteQueryParams;
    security: GmailUsersMessagesDeleteSecurity;
}
export declare class GmailUsersMessagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
