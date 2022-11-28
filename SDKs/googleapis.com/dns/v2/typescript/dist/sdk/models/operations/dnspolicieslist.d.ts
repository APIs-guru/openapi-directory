import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsPoliciesListPathParams extends SpeakeasyBase {
    location: string;
    project: string;
}
export declare class DnsPoliciesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsPoliciesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesListSecurity extends SpeakeasyBase {
    option1?: DnsPoliciesListSecurityOption1;
    option2?: DnsPoliciesListSecurityOption2;
    option3?: DnsPoliciesListSecurityOption3;
    option4?: DnsPoliciesListSecurityOption4;
}
export declare class DnsPoliciesListRequest extends SpeakeasyBase {
    pathParams: DnsPoliciesListPathParams;
    queryParams: DnsPoliciesListQueryParams;
    security: DnsPoliciesListSecurity;
}
export declare class DnsPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    policiesListResponse?: shared.PoliciesListResponse;
    statusCode: number;
}
