import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchOperationsGetSecurityOption1;
    option2?: CloudsearchOperationsGetSecurityOption2;
    option3?: CloudsearchOperationsGetSecurityOption3;
    option4?: CloudsearchOperationsGetSecurityOption4;
    option5?: CloudsearchOperationsGetSecurityOption5;
    option6?: CloudsearchOperationsGetSecurityOption6;
}
export declare class CloudsearchOperationsGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchOperationsGetPathParams;
    queryParams: CloudsearchOperationsGetQueryParams;
    security: CloudsearchOperationsGetSecurity;
}
export declare class CloudsearchOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
