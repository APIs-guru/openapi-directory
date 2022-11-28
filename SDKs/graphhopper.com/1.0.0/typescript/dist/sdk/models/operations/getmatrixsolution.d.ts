import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMatrixSolutionPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetMatrixSolutionRequest extends SpeakeasyBase {
    pathParams: GetMatrixSolutionPathParams;
}
export declare class GetMatrixSolutionResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    matrixResponse?: shared.MatrixResponse;
    statusCode: number;
}
