import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdFramesFrameImageInt16PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameImageInt16QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdFramesFrameImageInt16Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFramesFrameImageInt16Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdFramesFrameImageInt16PathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdFramesFrameImageInt16QueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdFramesFrameImageInt16Headers;
}


export class GetInstancesIdFramesFrameImageInt16Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
