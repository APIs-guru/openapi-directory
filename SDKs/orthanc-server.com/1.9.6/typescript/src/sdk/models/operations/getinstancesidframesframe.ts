import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFramePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFramePathParams;
}


export class GetInstancesIdFramesFrameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdFramesFrame200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
