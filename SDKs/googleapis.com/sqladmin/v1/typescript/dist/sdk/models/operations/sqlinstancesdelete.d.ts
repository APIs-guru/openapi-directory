import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesDeletePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesDeleteQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesDeleteSecurity extends SpeakeasyBase {
    option1?: SqlInstancesDeleteSecurityOption1;
    option2?: SqlInstancesDeleteSecurityOption2;
}
export declare class SqlInstancesDeleteRequest extends SpeakeasyBase {
    pathParams: SqlInstancesDeletePathParams;
    queryParams: SqlInstancesDeleteQueryParams;
    security: SqlInstancesDeleteSecurity;
}
export declare class SqlInstancesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
