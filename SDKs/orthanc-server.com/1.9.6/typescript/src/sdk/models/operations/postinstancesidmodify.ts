import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesIdModifyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdModifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInstancesIdModifyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostInstancesIdModifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
