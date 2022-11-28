import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallFirewalledServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service" })
  service: string;
}

export enum UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum {
    Blocked = "blocked",
    Restricted = "restricted",
    Unrestricted = "unrestricted"
}


export class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];
}


export class UpdateNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallFirewalledServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
}


export class UpdateNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallFirewalledService200ApplicationJsonObject?: Map<string, any>;
}
