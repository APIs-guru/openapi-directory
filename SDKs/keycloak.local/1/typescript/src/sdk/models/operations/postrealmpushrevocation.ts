import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmPushRevocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmPushRevocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmPushRevocationPathParams;
}


export class PostRealmPushRevocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
