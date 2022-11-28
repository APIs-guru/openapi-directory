import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceVpnThirdPartyVpnPeersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams;
}


export class GetOrganizationApplianceVpnThirdPartyVpnPeersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject?: Map<string, any>;
}
