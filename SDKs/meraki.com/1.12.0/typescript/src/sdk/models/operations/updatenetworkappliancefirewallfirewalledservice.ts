import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallFirewalledServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=service" })
  service: string;
}

export enum UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum {
    Blocked = "blocked"
,    Restricted = "restricted"
,    Unrestricted = "unrestricted"
}


export class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;

  @Metadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];
}


export class UpdateNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallFirewalledServicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
}


export class UpdateNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallFirewalledService200ApplicationJsonObject?: Map<string, any>;
}
