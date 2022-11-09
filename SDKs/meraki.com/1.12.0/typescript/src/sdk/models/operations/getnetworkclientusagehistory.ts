import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientUsageHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientUsageHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientUsageHistoryPathParams;
}


export class GetNetworkClientUsageHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClientUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
