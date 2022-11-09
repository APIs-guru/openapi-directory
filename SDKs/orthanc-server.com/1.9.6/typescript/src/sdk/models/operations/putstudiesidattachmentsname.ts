import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutStudiesIdAttachmentsNamePathParams;

  @Metadata()
  headers: PutStudiesIdAttachmentsNameHeaders;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putStudiesIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
