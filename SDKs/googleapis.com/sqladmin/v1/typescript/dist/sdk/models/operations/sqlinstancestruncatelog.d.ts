import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesTruncateLogPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesTruncateLogQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesTruncateLogSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesTruncateLogSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesTruncateLogSecurity extends SpeakeasyBase {
    option1?: SqlInstancesTruncateLogSecurityOption1;
    option2?: SqlInstancesTruncateLogSecurityOption2;
}
export declare class SqlInstancesTruncateLogRequest extends SpeakeasyBase {
    pathParams: SqlInstancesTruncateLogPathParams;
    queryParams: SqlInstancesTruncateLogQueryParams;
    request?: shared.InstancesTruncateLogRequest;
    security: SqlInstancesTruncateLogSecurity;
}
export declare class SqlInstancesTruncateLogResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
