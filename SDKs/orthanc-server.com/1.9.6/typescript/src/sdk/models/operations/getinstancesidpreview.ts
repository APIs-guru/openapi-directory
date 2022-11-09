import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdPreviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdPreviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdPreviewHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdPreviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdPreviewPathParams;

  @Metadata()
  queryParams: GetInstancesIdPreviewQueryParams;

  @Metadata()
  headers: GetInstancesIdPreviewHeaders;
}


export class GetInstancesIdPreviewResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
