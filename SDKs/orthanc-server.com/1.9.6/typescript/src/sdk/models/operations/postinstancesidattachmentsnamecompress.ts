import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostInstancesIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInstancesIdAttachmentsNameCompressPathParams;
}


export class PostInstancesIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
