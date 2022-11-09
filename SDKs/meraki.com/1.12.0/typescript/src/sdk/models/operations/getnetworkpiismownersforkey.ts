import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkPiiSmOwnersForKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiSmOwnersForKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bluetoothMac" })
  bluetoothMac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imei" })
  imei?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac" })
  mac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetNetworkPiiSmOwnersForKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkPiiSmOwnersForKeyPathParams;

  @Metadata()
  queryParams: GetNetworkPiiSmOwnersForKeyQueryParams;
}


export class GetNetworkPiiSmOwnersForKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkPiiSmOwnersForKey200ApplicationJsonObject?: Map<string, any>;
}
