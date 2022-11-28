import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolReplicasRestartPathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    replicaName: string;
    zone: string;
}
export declare class ReplicapoolReplicasRestartQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolReplicasRestartSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasRestartSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasRestartSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasRestartSecurity extends SpeakeasyBase {
    option1?: ReplicapoolReplicasRestartSecurityOption1;
    option2?: ReplicapoolReplicasRestartSecurityOption2;
    option3?: ReplicapoolReplicasRestartSecurityOption3;
}
export declare class ReplicapoolReplicasRestartRequest extends SpeakeasyBase {
    pathParams: ReplicapoolReplicasRestartPathParams;
    queryParams: ReplicapoolReplicasRestartQueryParams;
    security: ReplicapoolReplicasRestartSecurity;
}
export declare class ReplicapoolReplicasRestartResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
