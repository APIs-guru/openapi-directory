import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TraceDelayDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class TraceDelayDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TraceDelayDelayPathParams;
}


export class TraceDelayDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
