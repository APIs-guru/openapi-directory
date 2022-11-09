import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutInstancesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutInstancesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutInstancesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutInstancesIdMetadataNamePathParams;

  @Metadata()
  headers: PutInstancesIdMetadataNameHeaders;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutInstancesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
