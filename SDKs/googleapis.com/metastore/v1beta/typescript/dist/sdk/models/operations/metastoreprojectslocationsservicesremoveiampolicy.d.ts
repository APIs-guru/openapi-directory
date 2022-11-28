import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesRemoveIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MetastoreProjectsLocationsServicesRemoveIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesRemoveIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesRemoveIamPolicyRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesRemoveIamPolicyPathParams;
    queryParams: MetastoreProjectsLocationsServicesRemoveIamPolicyQueryParams;
    request?: Map<string, any>;
    security: MetastoreProjectsLocationsServicesRemoveIamPolicySecurity;
}
export declare class MetastoreProjectsLocationsServicesRemoveIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    removeIamPolicyResponse?: shared.RemoveIamPolicyResponse;
    statusCode: number;
}
