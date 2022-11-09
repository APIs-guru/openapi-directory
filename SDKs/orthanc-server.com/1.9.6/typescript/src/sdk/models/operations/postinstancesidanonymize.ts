import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdAnonymizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdAnonymizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdAnonymizePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostInstancesIdAnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
