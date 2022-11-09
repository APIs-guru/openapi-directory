import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutStudiesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutStudiesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutStudiesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutStudiesIdMetadataNamePathParams;

  @Metadata()
  headers: PutStudiesIdMetadataNameHeaders;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutStudiesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
