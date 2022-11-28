import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSolutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetSolution404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetSolutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSolutionPathParams;
}


export class GetSolutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  response?: shared.Response;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSolution404ApplicationJsonObject?: GetSolution404ApplicationJson;
}
