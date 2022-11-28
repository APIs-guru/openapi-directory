import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkPiiPiiKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiPiiKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bluetoothMac" })
  bluetoothMac?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imei" })
  imei?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac" })
  mac?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetNetworkPiiPiiKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkPiiPiiKeysPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkPiiPiiKeysQueryParams;
}


export class GetNetworkPiiPiiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkPiiPiiKeys200ApplicationJsonObject?: Map<string, any>;
}
