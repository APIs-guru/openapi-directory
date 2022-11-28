import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsGuestPoliciesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsGuestPoliciesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    guestPolicyId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsGuestPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsGuestPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsGuestPoliciesCreatePathParams;
    queryParams: OsconfigProjectsGuestPoliciesCreateQueryParams;
    request?: shared.GuestPolicyInput;
    security: OsconfigProjectsGuestPoliciesCreateSecurity;
}
export declare class OsconfigProjectsGuestPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    guestPolicy?: shared.GuestPolicy;
    statusCode: number;
}
