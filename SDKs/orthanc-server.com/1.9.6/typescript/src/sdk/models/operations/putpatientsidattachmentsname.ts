import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutPatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutPatientsIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPatientsIdAttachmentsNamePathParams;

  @Metadata()
  headers: PutPatientsIdAttachmentsNameHeaders;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class PutPatientsIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putPatientsIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
