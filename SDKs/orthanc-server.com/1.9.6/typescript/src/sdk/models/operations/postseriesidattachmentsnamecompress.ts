import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostSeriesIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdAttachmentsNameCompressPathParams;
}


export class PostSeriesIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
