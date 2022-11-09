import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFrameImageUint8PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameImageUint8QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdFramesFrameImageUint8Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFramesFrameImageUint8Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFrameImageUint8PathParams;

  @Metadata()
  queryParams: GetInstancesIdFramesFrameImageUint8QueryParams;

  @Metadata()
  headers: GetInstancesIdFramesFrameImageUint8Headers;
}


export class GetInstancesIdFramesFrameImageUint8Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
