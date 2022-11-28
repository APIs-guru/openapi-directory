import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStudiesIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostStudiesIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStudiesIdAttachmentsNameCompressPathParams;
}


export class PostStudiesIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
