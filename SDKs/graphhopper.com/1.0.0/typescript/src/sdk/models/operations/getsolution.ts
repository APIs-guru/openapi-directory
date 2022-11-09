import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSolutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetSolutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSolutionPathParams;
}


export class GetSolution404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetSolutionResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSolution404ApplicationJsonObject?: GetSolution404ApplicationJson;
}
