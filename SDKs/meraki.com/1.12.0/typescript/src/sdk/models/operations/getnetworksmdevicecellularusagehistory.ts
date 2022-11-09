import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceCellularUsageHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceCellularUsageHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceCellularUsageHistoryPathParams;
}


export class GetNetworkSmDeviceCellularUsageHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceCellularUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
