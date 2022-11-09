import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;
}


export class GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
