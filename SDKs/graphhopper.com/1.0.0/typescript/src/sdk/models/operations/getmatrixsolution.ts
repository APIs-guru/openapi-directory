import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMatrixSolutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetMatrixSolutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMatrixSolutionPathParams;
}


export class GetMatrixSolutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ghError?: shared.GhError;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  matrixResponse?: shared.MatrixResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
