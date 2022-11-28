import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersLabelsDeletePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersLabelsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersLabelsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsDeleteSecurity extends SpeakeasyBase {
    option1?: GmailUsersLabelsDeleteSecurityOption1;
    option2?: GmailUsersLabelsDeleteSecurityOption2;
    option3?: GmailUsersLabelsDeleteSecurityOption3;
}
export declare class GmailUsersLabelsDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersLabelsDeletePathParams;
    queryParams: GmailUsersLabelsDeleteQueryParams;
    security: GmailUsersLabelsDeleteSecurity;
}
export declare class GmailUsersLabelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
