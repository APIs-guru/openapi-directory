import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolPoolsResizePathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    zone: string;
}
export declare class ReplicapoolPoolsResizeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    numReplicas?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolPoolsResizeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsResizeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsResizeSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsResizeSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsResizeSecurityOption1;
    option2?: ReplicapoolPoolsResizeSecurityOption2;
    option3?: ReplicapoolPoolsResizeSecurityOption3;
}
export declare class ReplicapoolPoolsResizeRequest extends SpeakeasyBase {
    pathParams: ReplicapoolPoolsResizePathParams;
    queryParams: ReplicapoolPoolsResizeQueryParams;
    security: ReplicapoolPoolsResizeSecurity;
}
export declare class ReplicapoolPoolsResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
