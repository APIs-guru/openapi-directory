import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=baudrate" })
  baudrate: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device" })
  device: string;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPathParams;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mbusData?: string;

  @SpeakeasyMetadata()
  textError?: string;
}
