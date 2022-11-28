import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesStopReplicaPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesStopReplicaQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesStopReplicaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesStopReplicaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesStopReplicaSecurity extends SpeakeasyBase {
    option1?: SqlInstancesStopReplicaSecurityOption1;
    option2?: SqlInstancesStopReplicaSecurityOption2;
}
export declare class SqlInstancesStopReplicaRequest extends SpeakeasyBase {
    pathParams: SqlInstancesStopReplicaPathParams;
    queryParams: SqlInstancesStopReplicaQueryParams;
    security: SqlInstancesStopReplicaSecurity;
}
export declare class SqlInstancesStopReplicaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
