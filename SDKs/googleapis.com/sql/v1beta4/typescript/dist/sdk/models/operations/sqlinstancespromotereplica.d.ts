import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesPromoteReplicaPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesPromoteReplicaQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesPromoteReplicaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesPromoteReplicaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesPromoteReplicaSecurity extends SpeakeasyBase {
    option1?: SqlInstancesPromoteReplicaSecurityOption1;
    option2?: SqlInstancesPromoteReplicaSecurityOption2;
}
export declare class SqlInstancesPromoteReplicaRequest extends SpeakeasyBase {
    pathParams: SqlInstancesPromoteReplicaPathParams;
    queryParams: SqlInstancesPromoteReplicaQueryParams;
    security: SqlInstancesPromoteReplicaSecurity;
}
export declare class SqlInstancesPromoteReplicaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
