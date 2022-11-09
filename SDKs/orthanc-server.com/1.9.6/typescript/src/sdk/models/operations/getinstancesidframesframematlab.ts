import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFrameMatlabPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameMatlabRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFrameMatlabPathParams;
}


export class GetInstancesIdFramesFrameMatlabResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
