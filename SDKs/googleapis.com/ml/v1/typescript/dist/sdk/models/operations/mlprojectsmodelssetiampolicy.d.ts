import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MlProjectsModelsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsSetIamPolicyPathParams;
    queryParams: MlProjectsModelsSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: MlProjectsModelsSetIamPolicySecurity;
}
export declare class MlProjectsModelsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
