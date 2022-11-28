import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlOperationsGetPathParams extends SpeakeasyBase {
    operation: string;
    project: string;
}
export declare class SqlOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class SqlOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlOperationsGetSecurity extends SpeakeasyBase {
    option1?: SqlOperationsGetSecurityOption1;
    option2?: SqlOperationsGetSecurityOption2;
}
export declare class SqlOperationsGetRequest extends SpeakeasyBase {
    pathParams: SqlOperationsGetPathParams;
    queryParams: SqlOperationsGetQueryParams;
    security: SqlOperationsGetSecurity;
}
export declare class SqlOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
