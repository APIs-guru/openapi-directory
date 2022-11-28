import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TraceDelayDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class TraceDelayDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TraceDelayDelayPathParams;
}


export class TraceDelayDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
