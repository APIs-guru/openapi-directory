import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolReplicasDeletePathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    replicaName: string;
    zone: string;
}
export declare class ReplicapoolReplicasDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolReplicasDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasDeleteSecurity extends SpeakeasyBase {
    option1?: ReplicapoolReplicasDeleteSecurityOption1;
    option2?: ReplicapoolReplicasDeleteSecurityOption2;
    option3?: ReplicapoolReplicasDeleteSecurityOption3;
}
export declare class ReplicapoolReplicasDeleteRequest extends SpeakeasyBase {
    pathParams: ReplicapoolReplicasDeletePathParams;
    queryParams: ReplicapoolReplicasDeleteQueryParams;
    request?: shared.ReplicasDeleteRequest;
    security: ReplicapoolReplicasDeleteSecurity;
}
export declare class ReplicapoolReplicasDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
