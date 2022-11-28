import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsWatchesCreatePathParams extends SpeakeasyBase {
    formId: string;
}
export declare class FormsFormsWatchesCreateQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsWatchesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesCreateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesCreateSecurity extends SpeakeasyBase {
    option1?: FormsFormsWatchesCreateSecurityOption1;
    option2?: FormsFormsWatchesCreateSecurityOption2;
    option3?: FormsFormsWatchesCreateSecurityOption3;
    option4?: FormsFormsWatchesCreateSecurityOption4;
    option5?: FormsFormsWatchesCreateSecurityOption5;
    option6?: FormsFormsWatchesCreateSecurityOption6;
}
export declare class FormsFormsWatchesCreateRequest extends SpeakeasyBase {
    pathParams: FormsFormsWatchesCreatePathParams;
    queryParams: FormsFormsWatchesCreateQueryParams;
    request?: shared.CreateWatchRequestInput;
    security: FormsFormsWatchesCreateSecurity;
}
export declare class FormsFormsWatchesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    watch?: shared.Watch;
}
