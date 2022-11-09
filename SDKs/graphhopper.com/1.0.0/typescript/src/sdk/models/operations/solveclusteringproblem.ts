import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SolveClusteringProblemRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterRequest;
}


export class SolveClusteringProblemResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  clusterResponse?: shared.ClusterResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  internalErrorMessage?: shared.InternalErrorMessage;

  @Metadata()
  statusCode: number;
}
