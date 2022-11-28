import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClusterSolutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetClusterSolution404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetClusterSolutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClusterSolutionPathParams;
}


export class GetClusterSolutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  clusterResponse?: shared.ClusterResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClusterSolution404ApplicationJsonObject?: GetClusterSolution404ApplicationJson;
}
