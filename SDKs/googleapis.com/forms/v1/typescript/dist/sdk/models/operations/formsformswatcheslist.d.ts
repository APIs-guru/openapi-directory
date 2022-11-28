import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsWatchesListPathParams extends SpeakeasyBase {
    formId: string;
}
export declare class FormsFormsWatchesListQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsWatchesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsWatchesListSecurity extends SpeakeasyBase {
    option1?: FormsFormsWatchesListSecurityOption1;
    option2?: FormsFormsWatchesListSecurityOption2;
    option3?: FormsFormsWatchesListSecurityOption3;
    option4?: FormsFormsWatchesListSecurityOption4;
    option5?: FormsFormsWatchesListSecurityOption5;
    option6?: FormsFormsWatchesListSecurityOption6;
}
export declare class FormsFormsWatchesListRequest extends SpeakeasyBase {
    pathParams: FormsFormsWatchesListPathParams;
    queryParams: FormsFormsWatchesListQueryParams;
    security: FormsFormsWatchesListSecurity;
}
export declare class FormsFormsWatchesListResponse extends SpeakeasyBase {
    contentType: string;
    listWatchesResponse?: shared.ListWatchesResponse;
    statusCode: number;
}
