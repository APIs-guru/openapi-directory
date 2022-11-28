import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsWatchesDeletePathParams extends SpeakeasyBase {
    formId: string;
    watchId: string;
}
export declare class FormsFormsWatchesDeleteQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsWatchesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesDeleteSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesDeleteSecurity extends SpeakeasyBase {
    option1?: FormsFormsWatchesDeleteSecurityOption1;
    option2?: FormsFormsWatchesDeleteSecurityOption2;
    option3?: FormsFormsWatchesDeleteSecurityOption3;
    option4?: FormsFormsWatchesDeleteSecurityOption4;
    option5?: FormsFormsWatchesDeleteSecurityOption5;
    option6?: FormsFormsWatchesDeleteSecurityOption6;
}
export declare class FormsFormsWatchesDeleteRequest extends SpeakeasyBase {
    pathParams: FormsFormsWatchesDeletePathParams;
    queryParams: FormsFormsWatchesDeleteQueryParams;
    security: FormsFormsWatchesDeleteSecurity;
}
export declare class FormsFormsWatchesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
