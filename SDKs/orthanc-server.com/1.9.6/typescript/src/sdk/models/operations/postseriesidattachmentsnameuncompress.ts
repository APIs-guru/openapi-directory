import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSeriesIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostSeriesIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSeriesIdAttachmentsNameUncompressPathParams;
}


export class PostSeriesIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
