import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FormsFormsBatchUpdatePathParams extends SpeakeasyBase {
    formId: string;
}
export declare class FormsFormsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class FormsFormsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FormsFormsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: FormsFormsBatchUpdateSecurityOption1;
    option2?: FormsFormsBatchUpdateSecurityOption2;
    option3?: FormsFormsBatchUpdateSecurityOption3;
}
export declare class FormsFormsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: FormsFormsBatchUpdatePathParams;
    queryParams: FormsFormsBatchUpdateQueryParams;
    request?: shared.BatchUpdateFormRequestInput;
    security: FormsFormsBatchUpdateSecurity;
}
export declare class FormsFormsBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateFormResponse?: shared.BatchUpdateFormResponse;
    contentType: string;
    statusCode: number;
}
