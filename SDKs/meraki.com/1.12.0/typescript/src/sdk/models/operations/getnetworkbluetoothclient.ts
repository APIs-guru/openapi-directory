import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkBluetoothClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bluetoothClientId" })
  bluetoothClientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkBluetoothClientQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=connectivityHistoryTimespan" })
  connectivityHistoryTimespan?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeConnectivityHistory" })
  includeConnectivityHistory?: boolean;
}


export class GetNetworkBluetoothClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkBluetoothClientPathParams;

  @Metadata()
  queryParams: GetNetworkBluetoothClientQueryParams;
}


export class GetNetworkBluetoothClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkBluetoothClient200ApplicationJsonObject?: Map<string, any>;
}
