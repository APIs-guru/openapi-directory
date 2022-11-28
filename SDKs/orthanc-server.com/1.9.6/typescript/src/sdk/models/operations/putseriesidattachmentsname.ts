import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSeriesIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: PutSeriesIdAttachmentsNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putSeriesIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
