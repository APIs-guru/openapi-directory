import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraSensePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraSenseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraSensePathParams;
}


export class GetDeviceCameraSenseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraSense200ApplicationJsonObject?: Map<string, any>;
}
