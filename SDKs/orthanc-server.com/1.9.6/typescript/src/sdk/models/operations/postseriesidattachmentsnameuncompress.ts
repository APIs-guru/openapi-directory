import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostSeriesIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdAttachmentsNameUncompressPathParams;
}


export class PostSeriesIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
