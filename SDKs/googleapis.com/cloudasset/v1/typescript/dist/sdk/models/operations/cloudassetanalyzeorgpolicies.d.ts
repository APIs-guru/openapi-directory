import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAnalyzeOrgPoliciesPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetAnalyzeOrgPoliciesQueryParams extends SpeakeasyBase {
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
export declare class CloudassetAnalyzeOrgPoliciesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAnalyzeOrgPoliciesRequest extends SpeakeasyBase {
    pathParams: CloudassetAnalyzeOrgPoliciesPathParams;
    queryParams: CloudassetAnalyzeOrgPoliciesQueryParams;
    security: CloudassetAnalyzeOrgPoliciesSecurity;
}
export declare class CloudassetAnalyzeOrgPoliciesResponse extends SpeakeasyBase {
    analyzeOrgPoliciesResponse?: shared.AnalyzeOrgPoliciesResponse;
    contentType: string;
    statusCode: number;
}
