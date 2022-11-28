import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolPoolsListPathParams extends SpeakeasyBase {
    projectName: string;
    zone: string;
}
export declare class ReplicapoolPoolsListQueryParams extends SpeakeasyBase {
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
export declare class ReplicapoolPoolsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsListSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsListSecurityOption1;
    option2?: ReplicapoolPoolsListSecurityOption2;
    option3?: ReplicapoolPoolsListSecurityOption3;
    option4?: ReplicapoolPoolsListSecurityOption4;
    option5?: ReplicapoolPoolsListSecurityOption5;
    option6?: ReplicapoolPoolsListSecurityOption6;
}
export declare class ReplicapoolPoolsListRequest extends SpeakeasyBase {
    pathParams: ReplicapoolPoolsListPathParams;
    queryParams: ReplicapoolPoolsListQueryParams;
    security: ReplicapoolPoolsListSecurity;
}
export declare class ReplicapoolPoolsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
