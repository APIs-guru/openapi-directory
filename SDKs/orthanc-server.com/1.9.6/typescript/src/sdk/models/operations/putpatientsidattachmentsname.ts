import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutPatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutPatientsIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPatientsIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: PutPatientsIdAttachmentsNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutPatientsIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putPatientsIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
