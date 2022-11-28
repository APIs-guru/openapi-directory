import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesStartReplicaPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesStartReplicaQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesStartReplicaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesStartReplicaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesStartReplicaSecurity extends SpeakeasyBase {
    option1?: SqlInstancesStartReplicaSecurityOption1;
    option2?: SqlInstancesStartReplicaSecurityOption2;
}
export declare class SqlInstancesStartReplicaRequest extends SpeakeasyBase {
    pathParams: SqlInstancesStartReplicaPathParams;
    queryParams: SqlInstancesStartReplicaQueryParams;
    security: SqlInstancesStartReplicaSecurity;
}
export declare class SqlInstancesStartReplicaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
