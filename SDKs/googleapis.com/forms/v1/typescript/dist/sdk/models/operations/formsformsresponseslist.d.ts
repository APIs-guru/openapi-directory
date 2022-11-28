import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsResponsesListPathParams extends SpeakeasyBase {
    formId: string;
}
export declare class FormsFormsResponsesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FormsFormsResponsesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsResponsesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsResponsesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsResponsesListSecurity extends SpeakeasyBase {
    option1?: FormsFormsResponsesListSecurityOption1;
    option2?: FormsFormsResponsesListSecurityOption2;
    option3?: FormsFormsResponsesListSecurityOption3;
}
export declare class FormsFormsResponsesListRequest extends SpeakeasyBase {
    pathParams: FormsFormsResponsesListPathParams;
    queryParams: FormsFormsResponsesListQueryParams;
    security: FormsFormsResponsesListSecurity;
}
export declare class FormsFormsResponsesListResponse extends SpeakeasyBase {
    contentType: string;
    listFormResponsesResponse?: shared.ListFormResponsesResponse;
    statusCode: number;
}
