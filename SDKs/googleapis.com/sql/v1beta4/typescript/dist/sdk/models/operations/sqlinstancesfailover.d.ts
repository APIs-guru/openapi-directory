import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesFailoverPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesFailoverQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesFailoverSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesFailoverSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesFailoverSecurity extends SpeakeasyBase {
    option1?: SqlInstancesFailoverSecurityOption1;
    option2?: SqlInstancesFailoverSecurityOption2;
}
export declare class SqlInstancesFailoverRequest extends SpeakeasyBase {
    pathParams: SqlInstancesFailoverPathParams;
    queryParams: SqlInstancesFailoverQueryParams;
    request?: shared.InstancesFailoverRequest;
    security: SqlInstancesFailoverSecurity;
}
export declare class SqlInstancesFailoverResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
