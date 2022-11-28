import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmPushRevocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmPushRevocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmPushRevocationPathParams;
}


export class PostRealmPushRevocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
