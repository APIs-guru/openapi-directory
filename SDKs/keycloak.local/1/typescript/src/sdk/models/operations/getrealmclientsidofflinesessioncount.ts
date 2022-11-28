import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmClientsIdOfflineSessionCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdOfflineSessionCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdOfflineSessionCountPathParams;
}


export class GetRealmClientsIdOfflineSessionCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmClientsIdOfflineSessionCount2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
