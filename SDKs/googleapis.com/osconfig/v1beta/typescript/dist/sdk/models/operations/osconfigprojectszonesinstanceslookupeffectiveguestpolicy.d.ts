import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams extends SpeakeasyBase {
    instance: string;
}
export declare class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams;
    queryParams: OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams;
    request?: shared.LookupEffectiveGuestPolicyRequest;
    security: OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity;
}
export declare class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse extends SpeakeasyBase {
    contentType: string;
    effectiveGuestPolicy?: shared.EffectiveGuestPolicy;
    statusCode: number;
}
