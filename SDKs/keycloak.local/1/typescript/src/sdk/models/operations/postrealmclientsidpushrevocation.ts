import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdPushRevocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdPushRevocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdPushRevocationPathParams;
}


export class PostRealmClientsIdPushRevocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalRequestResult?: shared.GlobalRequestResult;

  @Metadata()
  statusCode: number;
}
