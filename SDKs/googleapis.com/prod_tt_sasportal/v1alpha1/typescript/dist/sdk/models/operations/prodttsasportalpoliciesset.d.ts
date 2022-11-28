import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalPoliciesSetQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalPoliciesSetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalPoliciesSetRequest extends SpeakeasyBase {
    queryParams: ProdTtSasportalPoliciesSetQueryParams;
    request?: shared.SasPortalSetPolicyRequest;
    security: ProdTtSasportalPoliciesSetSecurity;
}
export declare class ProdTtSasportalPoliciesSetResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalPolicy?: shared.SasPortalPolicy;
    statusCode: number;
}
