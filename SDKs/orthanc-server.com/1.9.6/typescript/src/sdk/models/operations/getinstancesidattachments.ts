import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdAttachmentsPathParams;
}


export class GetInstancesIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdAttachments200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
