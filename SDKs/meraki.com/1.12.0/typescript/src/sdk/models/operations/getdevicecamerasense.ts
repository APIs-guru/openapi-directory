import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraSensePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraSenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraSensePathParams;
}


export class GetDeviceCameraSenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraSense200ApplicationJsonObject?: Map<string, any>;
}
