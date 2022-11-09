import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFrameRawPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameRawRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFrameRawPathParams;
}


export class GetInstancesIdFramesFrameRawResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
