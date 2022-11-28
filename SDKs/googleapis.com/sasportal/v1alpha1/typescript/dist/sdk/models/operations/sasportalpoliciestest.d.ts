import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalPoliciesTestQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SasportalPoliciesTestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalPoliciesTestRequest extends SpeakeasyBase {
    queryParams: SasportalPoliciesTestQueryParams;
    request?: shared.SasPortalTestPermissionsRequest;
    security: SasportalPoliciesTestSecurity;
}
export declare class SasportalPoliciesTestResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalTestPermissionsResponse?: shared.SasPortalTestPermissionsResponse;
    statusCode: number;
}
