import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsPoliciesGetPathParams extends SpeakeasyBase {
    policy: string;
    project: string;
}
export declare class DnsPoliciesGetQueryParams extends SpeakeasyBase {
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
export declare class DnsPoliciesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesGetSecurity extends SpeakeasyBase {
    option1?: DnsPoliciesGetSecurityOption1;
    option2?: DnsPoliciesGetSecurityOption2;
    option3?: DnsPoliciesGetSecurityOption3;
    option4?: DnsPoliciesGetSecurityOption4;
}
export declare class DnsPoliciesGetRequest extends SpeakeasyBase {
    pathParams: DnsPoliciesGetPathParams;
    queryParams: DnsPoliciesGetQueryParams;
    security: DnsPoliciesGetSecurity;
}
export declare class DnsPoliciesGetResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
