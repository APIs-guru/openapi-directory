import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalPoliciesGetQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalPoliciesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalPoliciesGetRequest extends SpeakeasyBase {
    queryParams: ProdTtSasportalPoliciesGetQueryParams;
    request?: shared.SasPortalGetPolicyRequest;
    security: ProdTtSasportalPoliciesGetSecurity;
}
export declare class ProdTtSasportalPoliciesGetResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalPolicy?: shared.SasPortalPolicy;
    statusCode: number;
}
