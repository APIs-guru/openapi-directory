import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsPoliciesUpdatePathParams extends SpeakeasyBase {
    location: string;
    policy: string;
    project: string;
}
export declare class DnsPoliciesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DnsPoliciesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesUpdateSecurity extends SpeakeasyBase {
    option1?: DnsPoliciesUpdateSecurityOption1;
    option2?: DnsPoliciesUpdateSecurityOption2;
}
export declare class DnsPoliciesUpdateRequest extends SpeakeasyBase {
    pathParams: DnsPoliciesUpdatePathParams;
    queryParams: DnsPoliciesUpdateQueryParams;
    request?: shared.Policy;
    security: DnsPoliciesUpdateSecurity;
}
export declare class DnsPoliciesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    policiesUpdateResponse?: shared.PoliciesUpdateResponse;
    statusCode: number;
}
