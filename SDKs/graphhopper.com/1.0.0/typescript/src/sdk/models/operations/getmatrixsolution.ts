import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMatrixSolutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetMatrixSolutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMatrixSolutionPathParams;
}


export class GetMatrixSolutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  matrixResponse?: shared.MatrixResponse;

  @Metadata()
  statusCode: number;
}
