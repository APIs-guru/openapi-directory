import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClusterSolutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetClusterSolutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClusterSolutionPathParams;
}


export class GetClusterSolution404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetClusterSolutionResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  clusterResponse?: shared.ClusterResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClusterSolution404ApplicationJsonObject?: GetClusterSolution404ApplicationJson;
}
