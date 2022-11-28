import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SolveClusteringProblemRequest extends SpeakeasyBase {
    request: shared.ClusterRequest;
}
export declare class SolveClusteringProblemResponse extends SpeakeasyBase {
    badRequest?: shared.BadRequest;
    clusterResponse?: shared.ClusterResponse;
    contentType: string;
    headers: Map<string, string[]>;
    internalErrorMessage?: shared.InternalErrorMessage;
    statusCode: number;
}
