import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetExportIamPolicyAnalysisPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetExportIamPolicyAnalysisQueryParams extends SpeakeasyBase {
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
export declare class CloudassetExportIamPolicyAnalysisSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetExportIamPolicyAnalysisRequest extends SpeakeasyBase {
    pathParams: CloudassetExportIamPolicyAnalysisPathParams;
    queryParams: CloudassetExportIamPolicyAnalysisQueryParams;
    request?: shared.ExportIamPolicyAnalysisRequest;
    security: CloudassetExportIamPolicyAnalysisSecurity;
}
export declare class CloudassetExportIamPolicyAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
