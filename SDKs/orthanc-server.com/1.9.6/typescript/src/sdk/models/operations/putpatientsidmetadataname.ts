import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPatientsIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutPatientsIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutPatientsIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPatientsIdMetadataNamePathParams;

  @Metadata()
  headers: PutPatientsIdMetadataNameHeaders;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutPatientsIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
