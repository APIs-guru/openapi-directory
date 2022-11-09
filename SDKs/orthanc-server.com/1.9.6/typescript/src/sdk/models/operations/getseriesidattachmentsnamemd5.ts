import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdAttachmentsNameMd5Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdAttachmentsNameMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdAttachmentsNameMd5PathParams;

  @Metadata()
  headers: GetSeriesIdAttachmentsNameMd5Headers;
}


export class GetSeriesIdAttachmentsNameMd5Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
