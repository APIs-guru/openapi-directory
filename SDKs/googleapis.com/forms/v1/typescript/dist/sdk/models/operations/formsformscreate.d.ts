import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsCreateQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsCreateSecurity extends SpeakeasyBase {
    option1?: FormsFormsCreateSecurityOption1;
    option2?: FormsFormsCreateSecurityOption2;
    option3?: FormsFormsCreateSecurityOption3;
}
export declare class FormsFormsCreateRequest extends SpeakeasyBase {
    queryParams: FormsFormsCreateQueryParams;
    request?: shared.FormInput;
    security: FormsFormsCreateSecurity;
}
export declare class FormsFormsCreateResponse extends SpeakeasyBase {
    contentType: string;
    form?: shared.Form;
    statusCode: number;
}
