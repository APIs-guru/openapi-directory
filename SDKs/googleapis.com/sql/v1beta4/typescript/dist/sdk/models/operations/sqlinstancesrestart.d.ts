import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesRestartPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesRestartQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesRestartSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesRestartSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesRestartSecurity extends SpeakeasyBase {
    option1?: SqlInstancesRestartSecurityOption1;
    option2?: SqlInstancesRestartSecurityOption2;
}
export declare class SqlInstancesRestartRequest extends SpeakeasyBase {
    pathParams: SqlInstancesRestartPathParams;
    queryParams: SqlInstancesRestartQueryParams;
    security: SqlInstancesRestartSecurity;
}
export declare class SqlInstancesRestartResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
