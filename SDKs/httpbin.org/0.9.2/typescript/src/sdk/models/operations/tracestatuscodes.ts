import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TraceStatusCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class TraceStatusCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TraceStatusCodesPathParams;
}


export class TraceStatusCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
