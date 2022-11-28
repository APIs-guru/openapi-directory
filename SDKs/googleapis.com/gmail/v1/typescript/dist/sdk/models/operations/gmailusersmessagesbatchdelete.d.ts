import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesBatchDeletePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersMessagesBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesBatchDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesBatchDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesBatchDeletePathParams;
    queryParams: GmailUsersMessagesBatchDeleteQueryParams;
    request?: shared.BatchDeleteMessagesRequest;
    security: GmailUsersMessagesBatchDeleteSecurity;
}
export declare class GmailUsersMessagesBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
