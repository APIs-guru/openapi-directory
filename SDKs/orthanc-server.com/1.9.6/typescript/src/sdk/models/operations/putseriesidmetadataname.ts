import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSeriesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutSeriesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutSeriesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSeriesIdMetadataNamePathParams;

  @Metadata()
  headers: PutSeriesIdMetadataNameHeaders;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutSeriesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
