import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIterationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetIterationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIterationPathParams;

  @Metadata()
  headers: GetIterationHeaders;
}


export class GetIterationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  iteration?: shared.Iteration;

  @Metadata()
  statusCode: number;
}
