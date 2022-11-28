import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIterationPathParams;

  @SpeakeasyMetadata()
  headers: GetIterationHeaders;
}


export class GetIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  iteration?: shared.Iteration;

  @SpeakeasyMetadata()
  statusCode: number;
}
