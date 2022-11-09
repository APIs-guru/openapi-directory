import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkPiiPiiKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiPiiKeysQueryParams extends SpeakeasyBase {
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


export class GetNetworkPiiPiiKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkPiiPiiKeysPathParams;

  @Metadata()
  queryParams: GetNetworkPiiPiiKeysQueryParams;
}


export class GetNetworkPiiPiiKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkPiiPiiKeys200ApplicationJsonObject?: Map<string, any>;
}
