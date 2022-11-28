import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalPoliciesTestQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalPoliciesTestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalPoliciesTestRequest extends SpeakeasyBase {
    queryParams: ProdTtSasportalPoliciesTestQueryParams;
    request?: shared.SasPortalTestPermissionsRequest;
    security: ProdTtSasportalPoliciesTestSecurity;
}
export declare class ProdTtSasportalPoliciesTestResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalTestPermissionsResponse?: shared.SasPortalTestPermissionsResponse;
    statusCode: number;
}
