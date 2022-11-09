import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLogFileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetLogFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLogFileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLogFileQueryParams;

  @Metadata()
  security: GetLogFileSecurity;
}


export class GetLogFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLogFile200TextPlainBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
