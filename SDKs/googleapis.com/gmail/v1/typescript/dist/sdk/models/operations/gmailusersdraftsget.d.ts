import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersDraftsGetPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare enum GmailUsersDraftsGetFormatEnum {
    Minimal = "minimal",
    Full = "full",
    Raw = "raw",
    Metadata = "metadata"
}
export declare class GmailUsersDraftsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    format?: GmailUsersDraftsGetFormatEnum;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailUsersDraftsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersDraftsGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersDraftsGetSecurityOption1;
    option2?: GmailUsersDraftsGetSecurityOption2;
    option3?: GmailUsersDraftsGetSecurityOption3;
    option4?: GmailUsersDraftsGetSecurityOption4;
}
export declare class GmailUsersDraftsGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersDraftsGetPathParams;
    queryParams: GmailUsersDraftsGetQueryParams;
    security: GmailUsersDraftsGetSecurity;
}
export declare class GmailUsersDraftsGetResponse extends SpeakeasyBase {
    contentType: string;
    draft?: shared.Draft;
    statusCode: number;
}
