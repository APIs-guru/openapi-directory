import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApplianceVpnVpnFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceVpnVpnFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApplianceVpnVpnFirewallRulesPathParams;
}


export class GetOrganizationApplianceVpnVpnFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
