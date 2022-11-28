import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersThreadsTrashPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersThreadsTrashQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersThreadsTrashSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsTrashSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsTrashSecurity extends SpeakeasyBase {
    option1?: GmailUsersThreadsTrashSecurityOption1;
    option2?: GmailUsersThreadsTrashSecurityOption2;
}
export declare class GmailUsersThreadsTrashRequest extends SpeakeasyBase {
    pathParams: GmailUsersThreadsTrashPathParams;
    queryParams: GmailUsersThreadsTrashQueryParams;
    security: GmailUsersThreadsTrashSecurity;
}
export declare class GmailUsersThreadsTrashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thread?: shared.Thread;
}
