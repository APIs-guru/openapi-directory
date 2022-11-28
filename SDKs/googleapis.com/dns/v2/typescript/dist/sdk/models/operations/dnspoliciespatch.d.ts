import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsPoliciesPatchPathParams extends SpeakeasyBase {
    location: string;
    policy: string;
    project: string;
}
export declare class DnsPoliciesPatchQueryParams extends SpeakeasyBase {
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
export declare class DnsPoliciesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesPatchSecurity extends SpeakeasyBase {
    option1?: DnsPoliciesPatchSecurityOption1;
    option2?: DnsPoliciesPatchSecurityOption2;
}
export declare class DnsPoliciesPatchRequest extends SpeakeasyBase {
    pathParams: DnsPoliciesPatchPathParams;
    queryParams: DnsPoliciesPatchQueryParams;
    request?: shared.Policy;
    security: DnsPoliciesPatchSecurity;
}
export declare class DnsPoliciesPatchResponse extends SpeakeasyBase {
    contentType: string;
    policiesPatchResponse?: shared.PoliciesPatchResponse;
    statusCode: number;
}
