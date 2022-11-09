import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutInstancesIdAttachmentsNamePathParams;

  @Metadata()
  headers: PutInstancesIdAttachmentsNameHeaders;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putInstancesIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
