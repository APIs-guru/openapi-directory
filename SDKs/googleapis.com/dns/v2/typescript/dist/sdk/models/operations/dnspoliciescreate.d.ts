import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsPoliciesCreatePathParams extends SpeakeasyBase {
    location: string;
    project: string;
}
export declare class DnsPoliciesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsPoliciesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesCreateSecurity extends SpeakeasyBase {
    option1?: DnsPoliciesCreateSecurityOption1;
    option2?: DnsPoliciesCreateSecurityOption2;
}
export declare class DnsPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: DnsPoliciesCreatePathParams;
    queryParams: DnsPoliciesCreateQueryParams;
    request?: shared.Policy;
    security: DnsPoliciesCreateSecurity;
}
export declare class DnsPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
