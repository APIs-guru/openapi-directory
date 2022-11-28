import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class UpdateIterationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UpdateIterationRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  iteration?: shared.IterationInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  iteration1?: shared.IterationInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  iteration2?: shared.IterationInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UpdateIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateIterationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateIterationHeaders;

  @SpeakeasyMetadata()
  request: UpdateIterationRequestsInput;
}


export class UpdateIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  iteration?: shared.Iteration;

  @SpeakeasyMetadata()
  statusCode: number;
}
