import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSeriesIdAttachmentsNamePathParams;

  @Metadata()
  headers: PutSeriesIdAttachmentsNameHeaders;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putSeriesIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
