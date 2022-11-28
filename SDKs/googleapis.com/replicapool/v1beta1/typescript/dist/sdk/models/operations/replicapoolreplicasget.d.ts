import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolReplicasGetPathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    replicaName: string;
    zone: string;
}
export declare class ReplicapoolReplicasGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolReplicasGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasGetSecurity extends SpeakeasyBase {
    option1?: ReplicapoolReplicasGetSecurityOption1;
    option2?: ReplicapoolReplicasGetSecurityOption2;
    option3?: ReplicapoolReplicasGetSecurityOption3;
    option4?: ReplicapoolReplicasGetSecurityOption4;
    option5?: ReplicapoolReplicasGetSecurityOption5;
    option6?: ReplicapoolReplicasGetSecurityOption6;
}
export declare class ReplicapoolReplicasGetRequest extends SpeakeasyBase {
    pathParams: ReplicapoolReplicasGetPathParams;
    queryParams: ReplicapoolReplicasGetQueryParams;
    security: ReplicapoolReplicasGetSecurity;
}
export declare class ReplicapoolReplicasGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
