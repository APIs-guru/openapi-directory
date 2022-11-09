import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesFrameImageInt16PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameImageInt16QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdFramesFrameImageInt16Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFramesFrameImageInt16Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesFrameImageInt16PathParams;

  @Metadata()
  queryParams: GetInstancesIdFramesFrameImageInt16QueryParams;

  @Metadata()
  headers: GetInstancesIdFramesFrameImageInt16Headers;
}


export class GetInstancesIdFramesFrameImageInt16Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
