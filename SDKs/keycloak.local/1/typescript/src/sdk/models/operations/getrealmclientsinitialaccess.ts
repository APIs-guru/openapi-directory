import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsInitialAccessPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsInitialAccessRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsInitialAccessPathParams;
}


export class GetRealmClientsInitialAccessResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientInitialAccessPresentation })
  clientInitialAccessPresentations?: shared.ClientInitialAccessPresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
