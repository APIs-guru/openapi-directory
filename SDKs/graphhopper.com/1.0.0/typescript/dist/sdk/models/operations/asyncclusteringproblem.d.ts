import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AsyncClusteringProblemRequest extends SpeakeasyBase {
    request: shared.ClusterRequest;
}
export declare class AsyncClusteringProblemResponse extends SpeakeasyBase {
    badRequest?: shared.BadRequest;
    contentType: string;
    headers: Map<string, string[]>;
    internalErrorMessage?: shared.InternalErrorMessage;
    jobId?: shared.JobId;
    statusCode: number;
}
