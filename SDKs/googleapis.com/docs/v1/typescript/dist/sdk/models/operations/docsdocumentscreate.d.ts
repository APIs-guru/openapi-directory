import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocsDocumentsCreateQueryParams extends SpeakeasyBase {
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
export declare class DocsDocumentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsCreateSecurity extends SpeakeasyBase {
    option1?: DocsDocumentsCreateSecurityOption1;
    option2?: DocsDocumentsCreateSecurityOption2;
    option3?: DocsDocumentsCreateSecurityOption3;
}
export declare class DocsDocumentsCreateRequest extends SpeakeasyBase {
    queryParams: DocsDocumentsCreateQueryParams;
    request?: shared.DocumentInput;
    security: DocsDocumentsCreateSecurity;
}
export declare class DocsDocumentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    document?: shared.Document;
    statusCode: number;
}
