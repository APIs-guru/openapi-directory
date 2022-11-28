import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ContaineranalysisProvidersNotesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProvidersNotesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesGetIamPolicyPathParams;
    queryParams: ContaineranalysisProvidersNotesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: ContaineranalysisProvidersNotesGetIamPolicySecurity;
}
export declare class ContaineranalysisProvidersNotesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
