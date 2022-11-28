import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersThreadsDeletePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersThreadsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersThreadsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersThreadsDeletePathParams;
    queryParams: GmailUsersThreadsDeleteQueryParams;
    security: GmailUsersThreadsDeleteSecurity;
}
export declare class GmailUsersThreadsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
