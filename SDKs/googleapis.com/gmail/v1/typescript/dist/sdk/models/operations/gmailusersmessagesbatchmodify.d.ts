import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersMessagesBatchModifyPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersMessagesBatchModifyQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersMessagesBatchModifySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesBatchModifySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersMessagesBatchModifySecurity extends SpeakeasyBase {
    option1?: GmailUsersMessagesBatchModifySecurityOption1;
    option2?: GmailUsersMessagesBatchModifySecurityOption2;
}
export declare class GmailUsersMessagesBatchModifyRequest extends SpeakeasyBase {
    pathParams: GmailUsersMessagesBatchModifyPathParams;
    queryParams: GmailUsersMessagesBatchModifyQueryParams;
    request?: shared.BatchModifyMessagesRequest;
    security: GmailUsersMessagesBatchModifySecurity;
}
export declare class GmailUsersMessagesBatchModifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
