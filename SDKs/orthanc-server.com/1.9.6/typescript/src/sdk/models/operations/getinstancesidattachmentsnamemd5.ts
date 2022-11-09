import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetInstancesIdAttachmentsNameMd5Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetInstancesIdAttachmentsNameMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdAttachmentsNameMd5PathParams;

  @Metadata()
  headers: GetInstancesIdAttachmentsNameMd5Headers;
}


export class GetInstancesIdAttachmentsNameMd5Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
