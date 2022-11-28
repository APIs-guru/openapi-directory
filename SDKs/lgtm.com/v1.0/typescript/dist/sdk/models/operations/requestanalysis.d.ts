import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAnalysisPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class RequestAnalysisQueryParams extends SpeakeasyBase {
    commit: string;
    language?: string[];
}
export declare class RequestAnalysisSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class RequestAnalysisRequest extends SpeakeasyBase {
    pathParams: RequestAnalysisPathParams;
    queryParams: RequestAnalysisQueryParams;
    security: RequestAnalysisSecurity;
}
export declare class RequestAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}
