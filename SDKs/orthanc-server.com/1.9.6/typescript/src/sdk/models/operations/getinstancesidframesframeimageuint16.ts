import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFrameImageUint16PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameImageUint16QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdFramesFrameImageUint16Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFramesFrameImageUint16Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFrameImageUint16PathParams;

  @Metadata()
  queryParams: GetInstancesIdFramesFrameImageUint16QueryParams;

  @Metadata()
  headers: GetInstancesIdFramesFrameImageUint16Headers;
}


export class GetInstancesIdFramesFrameImageUint16Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
