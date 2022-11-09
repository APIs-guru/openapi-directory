import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceVpnThirdPartyVpnPeersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams;
}


export class GetOrganizationApplianceVpnThirdPartyVpnPeersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject?: Map<string, any>;
}
