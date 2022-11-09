import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdAttachmentsNameCompressedDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameCompressedDataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameCompressedDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdAttachmentsNameCompressedDataPathParams;

  @Metadata()
  headers: GetStudiesIdAttachmentsNameCompressedDataHeaders;
}


export class GetStudiesIdAttachmentsNameCompressedDataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
