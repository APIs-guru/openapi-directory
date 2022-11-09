import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdAttachmentsPathParams;
}


export class GetSeriesIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdAttachments200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
