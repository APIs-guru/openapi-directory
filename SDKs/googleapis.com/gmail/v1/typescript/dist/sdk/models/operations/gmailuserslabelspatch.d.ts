import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersLabelsPatchPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersLabelsPatchQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersLabelsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersLabelsPatchSecurity extends SpeakeasyBase {
    option1?: GmailUsersLabelsPatchSecurityOption1;
    option2?: GmailUsersLabelsPatchSecurityOption2;
    option3?: GmailUsersLabelsPatchSecurityOption3;
}
export declare class GmailUsersLabelsPatchRequest extends SpeakeasyBase {
    pathParams: GmailUsersLabelsPatchPathParams;
    queryParams: GmailUsersLabelsPatchQueryParams;
    request?: shared.Label;
    security: GmailUsersLabelsPatchSecurity;
}
export declare class GmailUsersLabelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
}
