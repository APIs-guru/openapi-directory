import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalysisPathParams extends SpeakeasyBase {
    analysisId: string;
}
export declare class GetAnalysisSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetAnalysisRequest extends SpeakeasyBase {
    pathParams: GetAnalysisPathParams;
    security: GetAnalysisSecurity;
}
export declare class GetAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    analysis?: shared.Analysis;
}
