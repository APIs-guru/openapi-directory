import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdAttachmentsNameIsCompressedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdAttachmentsNameIsCompressedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdAttachmentsNameIsCompressedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdAttachmentsNameIsCompressedPathParams;

  @Metadata()
  headers: GetSeriesIdAttachmentsNameIsCompressedHeaders;
}


export class GetSeriesIdAttachmentsNameIsCompressedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
