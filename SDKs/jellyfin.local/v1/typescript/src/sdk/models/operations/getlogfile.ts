import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLogFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetLogFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLogFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLogFileQueryParams;

  @SpeakeasyMetadata()
  security: GetLogFileSecurity;
}


export class GetLogFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLogFile200TextPlainBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
