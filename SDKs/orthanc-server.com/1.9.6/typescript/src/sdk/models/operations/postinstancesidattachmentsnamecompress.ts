import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostInstancesIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdAttachmentsNameCompressPathParams;
}


export class PostInstancesIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
