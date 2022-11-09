import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdAttachmentsNamePathParams;

  @Metadata()
  headers: GetInstancesIdAttachmentsNameHeaders;
}


export class GetInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
