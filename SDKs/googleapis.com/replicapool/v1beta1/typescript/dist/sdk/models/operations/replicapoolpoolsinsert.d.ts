import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolPoolsInsertPathParams extends SpeakeasyBase {
    projectName: string;
    zone: string;
}
export declare class ReplicapoolPoolsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolPoolsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsInsertSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsInsertSecurityOption1;
    option2?: ReplicapoolPoolsInsertSecurityOption2;
    option3?: ReplicapoolPoolsInsertSecurityOption3;
}
export declare class ReplicapoolPoolsInsertRequest extends SpeakeasyBase {
    pathParams: ReplicapoolPoolsInsertPathParams;
    queryParams: ReplicapoolPoolsInsertQueryParams;
    request?: shared.Pool;
    security: ReplicapoolPoolsInsertSecurity;
}
export declare class ReplicapoolPoolsInsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
