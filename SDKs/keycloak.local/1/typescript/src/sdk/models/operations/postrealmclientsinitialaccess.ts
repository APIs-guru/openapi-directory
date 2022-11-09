import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsInitialAccessPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsInitialAccessRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsInitialAccessPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClientInitialAccessCreatePresentation;
}


export class PostRealmClientsInitialAccessResponse extends SpeakeasyBase {
  @Metadata()
  clientInitialAccessPresentation?: shared.ClientInitialAccessPresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
