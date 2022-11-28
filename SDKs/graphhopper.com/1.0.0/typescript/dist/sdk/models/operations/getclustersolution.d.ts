import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClusterSolutionPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetClusterSolution404ApplicationJson extends SpeakeasyBase {
    message?: string;
    status?: string;
}
export declare class GetClusterSolutionRequest extends SpeakeasyBase {
    pathParams: GetClusterSolutionPathParams;
}
export declare class GetClusterSolutionResponse extends SpeakeasyBase {
    badRequest?: shared.BadRequest;
    clusterResponse?: shared.ClusterResponse;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getClusterSolution404ApplicationJsonObject?: GetClusterSolution404ApplicationJson;
}
