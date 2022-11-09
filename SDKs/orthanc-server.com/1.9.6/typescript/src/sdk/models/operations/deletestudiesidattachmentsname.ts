import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStudiesIdAttachmentsNamePathParams;

  @Metadata()
  headers: DeleteStudiesIdAttachmentsNameHeaders;
}


export class DeleteStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
