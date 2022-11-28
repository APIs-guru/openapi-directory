import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutStudiesIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: PutStudiesIdAttachmentsNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putStudiesIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
