import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmClientsIdOfflineSessionCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdOfflineSessionCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdOfflineSessionCountPathParams;
}


export class GetRealmClientsIdOfflineSessionCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmClientsIdOfflineSessionCount2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
