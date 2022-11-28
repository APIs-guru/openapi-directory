import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SolveClusteringProblemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClusterRequest;
}


export class SolveClusteringProblemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  clusterResponse?: shared.ClusterResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  internalErrorMessage?: shared.InternalErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
