import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAnalyzeOrgPolicyGovernedContainersPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    constraint?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedContainersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedContainersRequest extends SpeakeasyBase {
    pathParams: CloudassetAnalyzeOrgPolicyGovernedContainersPathParams;
    queryParams: CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams;
    security: CloudassetAnalyzeOrgPolicyGovernedContainersSecurity;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedContainersResponse extends SpeakeasyBase {
    analyzeOrgPolicyGovernedContainersResponse?: shared.AnalyzeOrgPolicyGovernedContainersResponse;
    contentType: string;
    statusCode: number;
}
