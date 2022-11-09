import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteInstancesIdAttachmentsNamePathParams;

  @Metadata()
  headers: DeleteInstancesIdAttachmentsNameHeaders;
}


export class DeleteInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
