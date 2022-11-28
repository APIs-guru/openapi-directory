import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesInsertPathParams extends SpeakeasyBase {
    project: string;
}
export declare class SqlInstancesInsertQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesInsertSecurity extends SpeakeasyBase {
    option1?: SqlInstancesInsertSecurityOption1;
    option2?: SqlInstancesInsertSecurityOption2;
}
export declare class SqlInstancesInsertRequest extends SpeakeasyBase {
    pathParams: SqlInstancesInsertPathParams;
    queryParams: SqlInstancesInsertQueryParams;
    request?: shared.DatabaseInstanceInput;
    security: SqlInstancesInsertSecurity;
}
export declare class SqlInstancesInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
