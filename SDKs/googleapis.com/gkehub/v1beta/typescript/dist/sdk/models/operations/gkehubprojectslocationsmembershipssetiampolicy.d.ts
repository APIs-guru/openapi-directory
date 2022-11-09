import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class GkehubProjectsLocationsMembershipsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class GkehubProjectsLocationsMembershipsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsSetIamPolicyPathParams;
    queryParams: GkehubProjectsLocationsMembershipsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: GkehubProjectsLocationsMembershipsSetIamPolicySecurity;
}
export declare class GkehubProjectsLocationsMembershipsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
