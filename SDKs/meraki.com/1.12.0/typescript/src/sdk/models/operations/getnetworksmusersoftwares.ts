import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmUserSoftwaresPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetNetworkSmUserSoftwaresRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmUserSoftwaresPathParams;
}


export class GetNetworkSmUserSoftwaresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmUserSoftwares200ApplicationJsonObject?: Map<string, any>;
}
