import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MlProjectsModelsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MlProjectsModelsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsGetIamPolicyPathParams;
    queryParams: MlProjectsModelsGetIamPolicyQueryParams;
    security: MlProjectsModelsGetIamPolicySecurity;
}
export declare class MlProjectsModelsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
