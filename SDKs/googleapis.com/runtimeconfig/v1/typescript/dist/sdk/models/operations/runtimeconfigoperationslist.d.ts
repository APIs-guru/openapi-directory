import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RuntimeconfigOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigOperationsListQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigOperationsListSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigOperationsListSecurityOption1;
    option2?: RuntimeconfigOperationsListSecurityOption2;
}
export declare class RuntimeconfigOperationsListRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigOperationsListPathParams;
    queryParams: RuntimeconfigOperationsListQueryParams;
    security: RuntimeconfigOperationsListSecurity;
}
export declare class RuntimeconfigOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
