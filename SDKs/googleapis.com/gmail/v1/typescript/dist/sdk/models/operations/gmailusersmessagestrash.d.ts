import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesTrashPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersMessagesTrashQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesTrashSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesTrashSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesTrashSecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesTrashSecurityOption1;
    option2?: GmailUsersMessagesTrashSecurityOption2;
}
export declare class GmailUsersMessagesTrashRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesTrashPathParams;
    queryParams: GmailUsersMessagesTrashQueryParams;
    security: GmailUsersMessagesTrashSecurity;
}
export declare class GmailUsersMessagesTrashResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
