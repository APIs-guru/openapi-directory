import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdPreviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdPreviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdPreviewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdPreviewPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdPreviewQueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdPreviewHeaders;
}


export class GetInstancesIdPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
