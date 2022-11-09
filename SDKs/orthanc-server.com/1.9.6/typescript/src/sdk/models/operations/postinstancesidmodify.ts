import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdModifyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdModifyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdModifyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostInstancesIdModifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
