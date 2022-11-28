import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsGetPathParams extends SpeakeasyBase {
    formId: string;
}
export declare class FormsFormsGetQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsGetSecurity extends SpeakeasyBase {
    option1?: FormsFormsGetSecurityOption1;
    option2?: FormsFormsGetSecurityOption2;
    option3?: FormsFormsGetSecurityOption3;
    option4?: FormsFormsGetSecurityOption4;
    option5?: FormsFormsGetSecurityOption5;
}
export declare class FormsFormsGetRequest extends SpeakeasyBase {
    pathParams: FormsFormsGetPathParams;
    queryParams: FormsFormsGetQueryParams;
    security: FormsFormsGetSecurity;
}
export declare class FormsFormsGetResponse extends SpeakeasyBase {
    contentType: string;
    form?: shared.Form;
    statusCode: number;
}
