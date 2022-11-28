import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkPiiSmOwnersForKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiSmOwnersForKeyQueryParams extends SpeakeasyBase {
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


export class GetNetworkPiiSmOwnersForKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkPiiSmOwnersForKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkPiiSmOwnersForKeyQueryParams;
}


export class GetNetworkPiiSmOwnersForKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkPiiSmOwnersForKey200ApplicationJsonObject?: Map<string, any>;
}
