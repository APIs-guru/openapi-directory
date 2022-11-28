import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSolutionPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetSolution404ApplicationJson extends SpeakeasyBase {
    message?: string;
    status?: string;
}
export declare class GetSolutionRequest extends SpeakeasyBase {
    pathParams: GetSolutionPathParams;
}
export declare class GetSolutionResponse extends SpeakeasyBase {
    badRequest?: shared.BadRequest;
    contentType: string;
    headers: Map<string, string[]>;
    response?: shared.Response;
    statusCode: number;
    getSolution404ApplicationJsonObject?: GetSolution404ApplicationJson;
}
