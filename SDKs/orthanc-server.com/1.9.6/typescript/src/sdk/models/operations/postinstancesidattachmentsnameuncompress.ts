import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostInstancesIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInstancesIdAttachmentsNameUncompressPathParams;
}


export class PostInstancesIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
