import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AsyncClusteringProblemRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterRequest;
}


export class AsyncClusteringProblemResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  internalErrorMessage?: shared.InternalErrorMessage;

  @Metadata()
  jobId?: shared.JobId;

  @Metadata()
  statusCode: number;
}
