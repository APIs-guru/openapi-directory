import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkAppliancePortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;
}


export class UpdateNetworkAppliancePortRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicy" })
  accessPolicy?: string;

  @Metadata({ data: "json, name=allowedVlans" })
  allowedVlans?: string;

  @Metadata({ data: "json, name=dropUntaggedTraffic" })
  dropUntaggedTraffic?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}


export class UpdateNetworkAppliancePortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkAppliancePortPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkAppliancePortRequestBody;
}


export class UpdateNetworkAppliancePortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkAppliancePort200ApplicationJsonObject?: Map<string, any>;
}
