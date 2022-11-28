import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolPoolsDeletePathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    zone: string;
}
export declare class ReplicapoolPoolsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolPoolsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsDeleteSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsDeleteSecurityOption1;
    option2?: ReplicapoolPoolsDeleteSecurityOption2;
    option3?: ReplicapoolPoolsDeleteSecurityOption3;
}
export declare class ReplicapoolPoolsDeleteRequest extends SpeakeasyBase {
    pathParams: ReplicapoolPoolsDeletePathParams;
    queryParams: ReplicapoolPoolsDeleteQueryParams;
    request?: shared.PoolsDeleteRequest;
    security: ReplicapoolPoolsDeleteSecurity;
}
export declare class ReplicapoolPoolsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
