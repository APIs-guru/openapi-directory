import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TraceStatusCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class TraceStatusCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TraceStatusCodesPathParams;
}


export class TraceStatusCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
