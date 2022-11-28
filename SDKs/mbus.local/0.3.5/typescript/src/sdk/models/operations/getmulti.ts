import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMultiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=baudrate" })
  baudrate: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device" })
  device: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxframes" })
  maxframes: number;
}


export class GetMultiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMultiPathParams;
}


export class GetMultiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mbusData?: string;

  @SpeakeasyMetadata()
  textError?: string;
}
