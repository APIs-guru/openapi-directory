import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersLabelsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersLabelsListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersLabelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsListSecurity extends SpeakeasyBase {
    option1?: GmailUsersLabelsListSecurityOption1;
    option2?: GmailUsersLabelsListSecurityOption2;
    option3?: GmailUsersLabelsListSecurityOption3;
    option4?: GmailUsersLabelsListSecurityOption4;
    option5?: GmailUsersLabelsListSecurityOption5;
}
export declare class GmailUsersLabelsListRequest extends SpeakeasyBase {
    pathParams: GmailUsersLabelsListPathParams;
    queryParams: GmailUsersLabelsListQueryParams;
    security: GmailUsersLabelsListSecurity;
}
export declare class GmailUsersLabelsListResponse extends SpeakeasyBase {
    contentType: string;
    listLabelsResponse?: shared.ListLabelsResponse;
    statusCode: number;
}
