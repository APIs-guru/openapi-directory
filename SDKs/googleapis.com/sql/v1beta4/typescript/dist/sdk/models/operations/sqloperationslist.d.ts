import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlOperationsListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class SqlOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    instance?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SqlOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlOperationsListSecurity extends SpeakeasyBase {
    option1?: SqlOperationsListSecurityOption1;
    option2?: SqlOperationsListSecurityOption2;
}
export declare class SqlOperationsListRequest extends SpeakeasyBase {
    pathParams: SqlOperationsListPathParams;
    queryParams: SqlOperationsListQueryParams;
    security: SqlOperationsListSecurity;
}
export declare class SqlOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    operationsListResponse?: shared.OperationsListResponse;
    statusCode: number;
}
