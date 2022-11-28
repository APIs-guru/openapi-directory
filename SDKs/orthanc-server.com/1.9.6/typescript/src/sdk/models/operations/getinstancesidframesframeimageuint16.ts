import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdFramesFrameImageUint16PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" })
  frame: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesFrameImageUint16QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdFramesFrameImageUint16Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFramesFrameImageUint16Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdFramesFrameImageUint16PathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdFramesFrameImageUint16QueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdFramesFrameImageUint16Headers;
}


export class GetInstancesIdFramesFrameImageUint16Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
