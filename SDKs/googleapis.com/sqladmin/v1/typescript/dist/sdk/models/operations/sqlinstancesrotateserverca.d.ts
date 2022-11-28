import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesRotateServerCaPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesRotateServerCaQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesRotateServerCaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesRotateServerCaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesRotateServerCaSecurity extends SpeakeasyBase {
    option1?: SqlInstancesRotateServerCaSecurityOption1;
    option2?: SqlInstancesRotateServerCaSecurityOption2;
}
export declare class SqlInstancesRotateServerCaRequest extends SpeakeasyBase {
    pathParams: SqlInstancesRotateServerCaPathParams;
    queryParams: SqlInstancesRotateServerCaQueryParams;
    request?: shared.InstancesRotateServerCaRequest;
    security: SqlInstancesRotateServerCaSecurity;
}
export declare class SqlInstancesRotateServerCaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
