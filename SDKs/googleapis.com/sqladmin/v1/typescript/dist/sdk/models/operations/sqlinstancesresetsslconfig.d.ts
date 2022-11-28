import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesResetSslConfigPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesResetSslConfigQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesResetSslConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesResetSslConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesResetSslConfigSecurity extends SpeakeasyBase {
    option1?: SqlInstancesResetSslConfigSecurityOption1;
    option2?: SqlInstancesResetSslConfigSecurityOption2;
}
export declare class SqlInstancesResetSslConfigRequest extends SpeakeasyBase {
    pathParams: SqlInstancesResetSslConfigPathParams;
    queryParams: SqlInstancesResetSslConfigQueryParams;
    security: SqlInstancesResetSslConfigSecurity;
}
export declare class SqlInstancesResetSslConfigResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
