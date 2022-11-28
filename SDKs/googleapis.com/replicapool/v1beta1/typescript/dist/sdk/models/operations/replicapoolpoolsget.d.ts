import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolPoolsGetPathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    zone: string;
}
export declare class ReplicapoolPoolsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolPoolsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsGetSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsGetSecurityOption1;
    option2?: ReplicapoolPoolsGetSecurityOption2;
    option3?: ReplicapoolPoolsGetSecurityOption3;
    option4?: ReplicapoolPoolsGetSecurityOption4;
    option5?: ReplicapoolPoolsGetSecurityOption5;
    option6?: ReplicapoolPoolsGetSecurityOption6;
}
export declare class ReplicapoolPoolsGetRequest extends SpeakeasyBase {
    pathParams: ReplicapoolPoolsGetPathParams;
    queryParams: ReplicapoolPoolsGetQueryParams;
    security: ReplicapoolPoolsGetSecurity;
}
export declare class ReplicapoolPoolsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
