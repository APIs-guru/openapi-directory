import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEtagEtagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=etag" })
  etag: string;
}


export class GetEtagEtagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetEtagEtagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEtagEtagPathParams;

  @Metadata()
  headers: GetEtagEtagHeaders;
}


export class GetEtagEtagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
