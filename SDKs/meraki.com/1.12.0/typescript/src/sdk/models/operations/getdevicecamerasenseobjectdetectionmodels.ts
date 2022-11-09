import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraSenseObjectDetectionModelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraSenseObjectDetectionModelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraSenseObjectDetectionModelsPathParams;
}


export class GetDeviceCameraSenseObjectDetectionModelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraSenseObjectDetectionModels200ApplicationJsonObject?: Map<string, any>;
}
