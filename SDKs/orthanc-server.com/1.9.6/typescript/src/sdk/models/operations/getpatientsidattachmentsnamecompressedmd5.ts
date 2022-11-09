import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdAttachmentsNameCompressedMd5PathParams;

  @Metadata()
  headers: GetPatientsIdAttachmentsNameCompressedMd5Headers;
}


export class GetPatientsIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
