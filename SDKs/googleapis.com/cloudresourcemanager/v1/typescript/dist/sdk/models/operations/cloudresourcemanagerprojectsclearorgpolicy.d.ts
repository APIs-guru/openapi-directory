import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsClearOrgPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsClearOrgPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsClearOrgPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsClearOrgPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsClearOrgPolicyPathParams;
    queryParams: CloudresourcemanagerProjectsClearOrgPolicyQueryParams;
    request?: shared.ClearOrgPolicyRequest;
    security: CloudresourcemanagerProjectsClearOrgPolicySecurity;
}
export declare class CloudresourcemanagerProjectsClearOrgPolicyResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
