import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStudiesIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostStudiesIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStudiesIdAttachmentsNameUncompressPathParams;
}


export class PostStudiesIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
