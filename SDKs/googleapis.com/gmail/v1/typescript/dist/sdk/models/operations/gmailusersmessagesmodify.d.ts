import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesModifyPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersMessagesModifyQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesModifySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesModifySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesModifySecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesModifySecurityOption1;
    option2?: GmailUsersMessagesModifySecurityOption2;
}
export declare class GmailUsersMessagesModifyRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesModifyPathParams;
    queryParams: GmailUsersMessagesModifyQueryParams;
    request?: shared.ModifyMessageRequest;
    security: GmailUsersMessagesModifySecurity;
}
export declare class GmailUsersMessagesModifyResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
