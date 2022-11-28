import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolReplicasListPathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    zone: string;
}
export declare class ReplicapoolReplicasListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolReplicasListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolReplicasListSecurity extends SpeakeasyBase {
    option1?: ReplicapoolReplicasListSecurityOption1;
    option2?: ReplicapoolReplicasListSecurityOption2;
    option3?: ReplicapoolReplicasListSecurityOption3;
    option4?: ReplicapoolReplicasListSecurityOption4;
    option5?: ReplicapoolReplicasListSecurityOption5;
    option6?: ReplicapoolReplicasListSecurityOption6;
}
export declare class ReplicapoolReplicasListRequest extends SpeakeasyBase {
    pathParams: ReplicapoolReplicasListPathParams;
    queryParams: ReplicapoolReplicasListQueryParams;
    security: ReplicapoolReplicasListSecurity;
}
export declare class ReplicapoolReplicasListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
