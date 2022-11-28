import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSeriesIdMetadataNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutSeriesIdMetadataNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutSeriesIdMetadataNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSeriesIdMetadataNamePathParams;

  @SpeakeasyMetadata()
  headers: PutSeriesIdMetadataNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutSeriesIdMetadataNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
