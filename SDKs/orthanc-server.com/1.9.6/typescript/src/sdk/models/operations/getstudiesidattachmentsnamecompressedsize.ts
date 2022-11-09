import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdAttachmentsNameCompressedSizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameCompressedSizeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameCompressedSizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdAttachmentsNameCompressedSizePathParams;

  @Metadata()
  headers: GetStudiesIdAttachmentsNameCompressedSizeHeaders;
}


export class GetStudiesIdAttachmentsNameCompressedSizeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
