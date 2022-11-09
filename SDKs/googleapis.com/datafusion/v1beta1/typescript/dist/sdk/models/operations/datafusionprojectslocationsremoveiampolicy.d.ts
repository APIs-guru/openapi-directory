import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsRemoveIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatafusionProjectsLocationsRemoveIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsRemoveIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsRemoveIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsRemoveIamPolicyPathParams;
    queryParams: DatafusionProjectsLocationsRemoveIamPolicyQueryParams;
    request?: Map<string, any>;
    security: DatafusionProjectsLocationsRemoveIamPolicySecurity;
}
export declare class DatafusionProjectsLocationsRemoveIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    removeIamPolicyResponse?: Map<string, any>;
    statusCode: number;
}
