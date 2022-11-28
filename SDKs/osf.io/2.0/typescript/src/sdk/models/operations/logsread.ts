import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=log_id" })
  logId: string;
}


export class LogsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LogsReadPathParams;
}


export class LogsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
