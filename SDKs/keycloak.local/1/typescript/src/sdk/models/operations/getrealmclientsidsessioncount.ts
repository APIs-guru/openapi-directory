import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmClientsIdSessionCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdSessionCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdSessionCountPathParams;
}


export class GetRealmClientsIdSessionCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmClientsIdSessionCount2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
