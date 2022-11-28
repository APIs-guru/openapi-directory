import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersThreadsModifyPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersThreadsModifyQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersThreadsModifySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsModifySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersThreadsModifySecurity extends SpeakeasyBase {
    option1?: GmailUsersThreadsModifySecurityOption1;
    option2?: GmailUsersThreadsModifySecurityOption2;
}
export declare class GmailUsersThreadsModifyRequest extends SpeakeasyBase {
    pathParams: GmailUsersThreadsModifyPathParams;
    queryParams: GmailUsersThreadsModifyQueryParams;
    request?: shared.ModifyThreadRequest;
    security: GmailUsersThreadsModifySecurity;
}
export declare class GmailUsersThreadsModifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thread?: shared.Thread;
}
