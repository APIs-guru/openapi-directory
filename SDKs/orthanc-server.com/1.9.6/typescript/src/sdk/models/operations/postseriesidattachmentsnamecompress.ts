import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSeriesIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostSeriesIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSeriesIdAttachmentsNameCompressPathParams;
}


export class PostSeriesIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
