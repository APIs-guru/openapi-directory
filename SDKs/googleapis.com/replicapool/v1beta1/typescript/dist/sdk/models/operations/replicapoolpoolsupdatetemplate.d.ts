import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplicapoolPoolsUpdatetemplatePathParams extends SpeakeasyBase {
    poolName: string;
    projectName: string;
    zone: string;
}
export declare class ReplicapoolPoolsUpdatetemplateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsUpdatetemplateSecurityOption1;
    option2?: ReplicapoolPoolsUpdatetemplateSecurityOption2;
    option3?: ReplicapoolPoolsUpdatetemplateSecurityOption3;
}
export declare class ReplicapoolPoolsUpdatetemplateRequest extends SpeakeasyBase {
    pathParams: ReplicapoolPoolsUpdatetemplatePathParams;
    queryParams: ReplicapoolPoolsUpdatetemplateQueryParams;
    request?: shared.Template;
    security: ReplicapoolPoolsUpdatetemplateSecurity;
}
export declare class ReplicapoolPoolsUpdatetemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
