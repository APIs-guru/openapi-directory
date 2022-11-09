import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkApplianceVlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=applianceIp" })
  applianceIp?: string;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class CreateNetworkApplianceVlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkApplianceVlanPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkApplianceVlanRequestBody;
}


export class CreateNetworkApplianceVlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkApplianceVlan201ApplicationJsonObject?: Map<string, any>;
}
