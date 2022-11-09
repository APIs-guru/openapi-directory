import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=baudrate" })
  baudrate: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=device" })
  device: string;
}


export class ScanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScanPathParams;
}


export class ScanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  slaves?: string;

  @Metadata()
  textError?: string;
}
