import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFrameRawGzPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameRawGzRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFrameRawGzPathParams;
}


export class GetInstancesIdFramesFrameRawGzResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
