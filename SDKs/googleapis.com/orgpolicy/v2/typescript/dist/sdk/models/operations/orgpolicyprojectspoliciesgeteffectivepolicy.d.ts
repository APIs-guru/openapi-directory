import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OrgpolicyProjectsPoliciesGetEffectivePolicyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OrgpolicyProjectsPoliciesGetEffectivePolicyQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyProjectsPoliciesGetEffectivePolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyProjectsPoliciesGetEffectivePolicyRequest extends SpeakeasyBase {
    pathParams: OrgpolicyProjectsPoliciesGetEffectivePolicyPathParams;
    queryParams: OrgpolicyProjectsPoliciesGetEffectivePolicyQueryParams;
    security: OrgpolicyProjectsPoliciesGetEffectivePolicySecurity;
}
export declare class OrgpolicyProjectsPoliciesGetEffectivePolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2Policy?: shared.GoogleCloudOrgpolicyV2Policy;
    statusCode: number;
}
