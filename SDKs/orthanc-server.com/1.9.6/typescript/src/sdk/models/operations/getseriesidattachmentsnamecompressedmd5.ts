import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdAttachmentsNameCompressedMd5PathParams;

  @Metadata()
  headers: GetSeriesIdAttachmentsNameCompressedMd5Headers;
}


export class GetSeriesIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
