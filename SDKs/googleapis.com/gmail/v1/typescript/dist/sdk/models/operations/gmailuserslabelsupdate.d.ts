import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersLabelsUpdatePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersLabelsUpdateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersLabelsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsUpdateSecurity extends SpeakeasyBase {
    option1?: GmailUsersLabelsUpdateSecurityOption1;
    option2?: GmailUsersLabelsUpdateSecurityOption2;
    option3?: GmailUsersLabelsUpdateSecurityOption3;
}
export declare class GmailUsersLabelsUpdateRequest extends SpeakeasyBase {
    pathParams: GmailUsersLabelsUpdatePathParams;
    queryParams: GmailUsersLabelsUpdateQueryParams;
    request?: shared.Label;
    security: GmailUsersLabelsUpdateSecurity;
}
export declare class GmailUsersLabelsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
}
