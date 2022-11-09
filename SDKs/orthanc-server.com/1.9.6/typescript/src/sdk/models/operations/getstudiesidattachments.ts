import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdAttachmentsPathParams;
}


export class GetStudiesIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdAttachments200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
