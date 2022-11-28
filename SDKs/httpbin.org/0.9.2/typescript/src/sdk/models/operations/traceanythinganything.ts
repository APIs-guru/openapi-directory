import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TraceAnythingAnythingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class TraceAnythingAnythingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TraceAnythingAnythingPathParams;
}


export class TraceAnythingAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
