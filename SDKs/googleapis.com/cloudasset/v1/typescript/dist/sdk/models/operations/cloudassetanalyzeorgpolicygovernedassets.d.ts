import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams extends SpeakeasyBase {
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
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsRequest extends SpeakeasyBase {
    pathParams: CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams;
    queryParams: CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams;
    security: CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsResponse extends SpeakeasyBase {
    analyzeOrgPolicyGovernedAssetsResponse?: shared.AnalyzeOrgPolicyGovernedAssetsResponse;
    contentType: string;
    statusCode: number;
}
