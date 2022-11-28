import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkBluetoothClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bluetoothClientId" })
  bluetoothClientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkBluetoothClientQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectivityHistoryTimespan" })
  connectivityHistoryTimespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeConnectivityHistory" })
  includeConnectivityHistory?: boolean;
}


export class GetNetworkBluetoothClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkBluetoothClientPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkBluetoothClientQueryParams;
}


export class GetNetworkBluetoothClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkBluetoothClient200ApplicationJsonObject?: Map<string, any>;
}
