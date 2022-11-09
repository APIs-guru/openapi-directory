import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TraceAnythingAnythingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class TraceAnythingAnythingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TraceAnythingAnythingPathParams;
}


export class TraceAnythingAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
