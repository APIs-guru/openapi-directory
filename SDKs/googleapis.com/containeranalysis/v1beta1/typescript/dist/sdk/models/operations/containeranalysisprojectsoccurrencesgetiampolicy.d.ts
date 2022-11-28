import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ContaineranalysisProjectsOccurrencesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsOccurrencesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesGetIamPolicyPathParams;
    queryParams: ContaineranalysisProjectsOccurrencesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: ContaineranalysisProjectsOccurrencesGetIamPolicySecurity;
}
export declare class ContaineranalysisProjectsOccurrencesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
