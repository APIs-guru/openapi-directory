import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutInstancesIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: PutInstancesIdAttachmentsNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putInstancesIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
