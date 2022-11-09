import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameMd5Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdAttachmentsNameMd5PathParams;

  @Metadata()
  headers: GetPatientsIdAttachmentsNameMd5Headers;
}


export class GetPatientsIdAttachmentsNameMd5Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
