import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdAttachmentsNameSizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetInstancesIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetInstancesIdAttachmentsNameSizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdAttachmentsNameSizePathParams;

  @Metadata()
  headers: GetInstancesIdAttachmentsNameSizeHeaders;
}


export class GetInstancesIdAttachmentsNameSizeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
