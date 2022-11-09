import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceFirewallFirewalledServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=service" })
  service: string;
}


export class GetNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceFirewallFirewalledServicePathParams;
}


export class GetNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceFirewallFirewalledService200ApplicationJsonObject?: Map<string, any>;
}
