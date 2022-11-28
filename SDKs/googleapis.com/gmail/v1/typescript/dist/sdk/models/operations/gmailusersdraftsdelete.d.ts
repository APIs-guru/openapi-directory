import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersDraftsDeletePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersDraftsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersDraftsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsDeleteSecurity extends SpeakeasyBase {
    option1?: GmailUsersDraftsDeleteSecurityOption1;
    option2?: GmailUsersDraftsDeleteSecurityOption2;
    option3?: GmailUsersDraftsDeleteSecurityOption3;
    option4?: GmailUsersDraftsDeleteSecurityOption4;
}
export declare class GmailUsersDraftsDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersDraftsDeletePathParams;
    queryParams: GmailUsersDraftsDeleteQueryParams;
    security: GmailUsersDraftsDeleteSecurity;
}
export declare class GmailUsersDraftsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
