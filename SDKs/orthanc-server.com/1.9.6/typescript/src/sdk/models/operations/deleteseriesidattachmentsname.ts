import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSeriesIdAttachmentsNamePathParams;

  @Metadata()
  headers: DeleteSeriesIdAttachmentsNameHeaders;
}


export class DeleteSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
