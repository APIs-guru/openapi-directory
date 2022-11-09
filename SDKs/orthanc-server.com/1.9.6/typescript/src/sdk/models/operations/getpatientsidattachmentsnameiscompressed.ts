import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdAttachmentsNameIsCompressedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameIsCompressedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameIsCompressedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdAttachmentsNameIsCompressedPathParams;

  @Metadata()
  headers: GetPatientsIdAttachmentsNameIsCompressedHeaders;
}


export class GetPatientsIdAttachmentsNameIsCompressedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
