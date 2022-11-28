import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsWatchesRenewPathParams extends SpeakeasyBase {
    formId: string;
    watchId: string;
}
export declare class FormsFormsWatchesRenewQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsWatchesRenewSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesRenewSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesRenewSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesRenewSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesRenewSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesRenewSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesRenewSecurity extends SpeakeasyBase {
    option1?: FormsFormsWatchesRenewSecurityOption1;
    option2?: FormsFormsWatchesRenewSecurityOption2;
    option3?: FormsFormsWatchesRenewSecurityOption3;
    option4?: FormsFormsWatchesRenewSecurityOption4;
    option5?: FormsFormsWatchesRenewSecurityOption5;
    option6?: FormsFormsWatchesRenewSecurityOption6;
}
export declare class FormsFormsWatchesRenewRequest extends SpeakeasyBase {
    pathParams: FormsFormsWatchesRenewPathParams;
    queryParams: FormsFormsWatchesRenewQueryParams;
    request?: Map<string, any>;
    security: FormsFormsWatchesRenewSecurity;
}
export declare class FormsFormsWatchesRenewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    watch?: shared.Watch;
}
