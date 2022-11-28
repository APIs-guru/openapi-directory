import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersLabelsGetPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersLabelsGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersLabelsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersLabelsGetSecurityOption1;
    option2?: GmailUsersLabelsGetSecurityOption2;
    option3?: GmailUsersLabelsGetSecurityOption3;
    option4?: GmailUsersLabelsGetSecurityOption4;
    option5?: GmailUsersLabelsGetSecurityOption5;
}
export declare class GmailUsersLabelsGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersLabelsGetPathParams;
    queryParams: GmailUsersLabelsGetQueryParams;
    security: GmailUsersLabelsGetSecurity;
}
export declare class GmailUsersLabelsGetResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
}
