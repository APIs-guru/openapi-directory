import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesIdAnonymizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdAnonymizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInstancesIdAnonymizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostInstancesIdAnonymizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
