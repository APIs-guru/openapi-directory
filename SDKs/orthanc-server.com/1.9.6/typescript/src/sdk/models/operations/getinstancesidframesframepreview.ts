import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdFramesFramePreviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFramePreviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdFramesFramePreviewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFramesFramePreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdFramesFramePreviewPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdFramesFramePreviewQueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdFramesFramePreviewHeaders;
}


export class GetInstancesIdFramesFramePreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
