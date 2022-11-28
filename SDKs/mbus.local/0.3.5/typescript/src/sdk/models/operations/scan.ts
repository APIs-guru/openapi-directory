import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=baudrate" })
  baudrate: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device" })
  device: string;
}


export class ScanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScanPathParams;
}


export class ScanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  slaves?: string;

  @SpeakeasyMetadata()
  textError?: string;
}
