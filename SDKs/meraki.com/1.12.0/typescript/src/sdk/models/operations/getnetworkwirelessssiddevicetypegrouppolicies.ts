import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;
}


export class GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
