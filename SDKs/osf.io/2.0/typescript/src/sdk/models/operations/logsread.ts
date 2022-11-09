import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=log_id" })
  logId: string;
}


export class LogsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LogsReadPathParams;
}


export class LogsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
