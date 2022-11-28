import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchOperationsLroListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchOperationsLroListQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchOperationsLroListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsLroListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsLroListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsLroListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsLroListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsLroListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchOperationsLroListSecurity extends SpeakeasyBase {
    option1?: CloudsearchOperationsLroListSecurityOption1;
    option2?: CloudsearchOperationsLroListSecurityOption2;
    option3?: CloudsearchOperationsLroListSecurityOption3;
    option4?: CloudsearchOperationsLroListSecurityOption4;
    option5?: CloudsearchOperationsLroListSecurityOption5;
    option6?: CloudsearchOperationsLroListSecurityOption6;
}
export declare class CloudsearchOperationsLroListRequest extends SpeakeasyBase {
    pathParams: CloudsearchOperationsLroListPathParams;
    queryParams: CloudsearchOperationsLroListQueryParams;
    security: CloudsearchOperationsLroListSecurity;
}
export declare class CloudsearchOperationsLroListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
