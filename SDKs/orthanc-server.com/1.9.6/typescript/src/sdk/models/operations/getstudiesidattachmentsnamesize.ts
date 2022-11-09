import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdAttachmentsNameSizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameSizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdAttachmentsNameSizePathParams;

  @Metadata()
  headers: GetStudiesIdAttachmentsNameSizeHeaders;
}


export class GetStudiesIdAttachmentsNameSizeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
