import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersLabelsCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersLabelsCreateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersLabelsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsCreateSecurity extends SpeakeasyBase {
    option1?: GmailUsersLabelsCreateSecurityOption1;
    option2?: GmailUsersLabelsCreateSecurityOption2;
    option3?: GmailUsersLabelsCreateSecurityOption3;
}
export declare class GmailUsersLabelsCreateRequest extends SpeakeasyBase {
    pathParams: GmailUsersLabelsCreatePathParams;
    queryParams: GmailUsersLabelsCreateQueryParams;
    request?: shared.Label;
    security: GmailUsersLabelsCreateSecurity;
}
export declare class GmailUsersLabelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
}
