import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClientRepresentation;
}


export class PostRealmClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
