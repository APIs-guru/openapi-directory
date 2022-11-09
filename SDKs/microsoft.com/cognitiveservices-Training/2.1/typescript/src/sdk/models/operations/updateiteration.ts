import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateIterationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class UpdateIterationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UpdateIterationRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  iteration?: shared.Iteration;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  iteration1?: shared.Iteration;

  @Metadata({ data: "request, media_type=text/json" })
  iteration2?: shared.Iteration;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UpdateIterationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateIterationPathParams;

  @Metadata()
  headers: UpdateIterationHeaders;

  @Metadata()
  request: UpdateIterationRequests;
}


export class UpdateIterationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  iteration?: shared.Iteration;

  @Metadata()
  statusCode: number;
}
