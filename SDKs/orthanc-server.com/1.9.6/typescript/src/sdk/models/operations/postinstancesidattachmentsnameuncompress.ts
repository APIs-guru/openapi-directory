import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostInstancesIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdAttachmentsNameUncompressPathParams;
}


export class PostInstancesIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
