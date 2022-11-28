import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsInitialAccessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsInitialAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsInitialAccessPathParams;
}


export class GetRealmClientsInitialAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientInitialAccessPresentation })
  clientInitialAccessPresentations?: shared.ClientInitialAccessPresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
