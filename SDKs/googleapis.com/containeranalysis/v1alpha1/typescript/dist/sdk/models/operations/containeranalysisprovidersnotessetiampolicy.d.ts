import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ContaineranalysisProvidersNotesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProvidersNotesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesSetIamPolicyPathParams;
    queryParams: ContaineranalysisProvidersNotesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ContaineranalysisProvidersNotesSetIamPolicySecurity;
}
export declare class ContaineranalysisProvidersNotesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
