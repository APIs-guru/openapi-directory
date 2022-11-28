import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEtagEtagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=etag" })
  etag: string;
}


export class GetEtagEtagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetEtagEtagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEtagEtagPathParams;

  @SpeakeasyMetadata()
  headers: GetEtagEtagHeaders;
}


export class GetEtagEtagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
