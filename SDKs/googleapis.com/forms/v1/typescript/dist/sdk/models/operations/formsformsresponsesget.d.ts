import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsResponsesGetPathParams extends SpeakeasyBase {
    formId: string;
    responseId: string;
}
export declare class FormsFormsResponsesGetQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsResponsesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsResponsesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsResponsesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsResponsesGetSecurity extends SpeakeasyBase {
    option1?: FormsFormsResponsesGetSecurityOption1;
    option2?: FormsFormsResponsesGetSecurityOption2;
    option3?: FormsFormsResponsesGetSecurityOption3;
}
export declare class FormsFormsResponsesGetRequest extends SpeakeasyBase {
    pathParams: FormsFormsResponsesGetPathParams;
    queryParams: FormsFormsResponsesGetQueryParams;
    security: FormsFormsResponsesGetSecurity;
}
export declare class FormsFormsResponsesGetResponse extends SpeakeasyBase {
    contentType: string;
    formResponse?: shared.FormResponse;
    statusCode: number;
}
