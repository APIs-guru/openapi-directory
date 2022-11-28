import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkApplianceVlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applianceIp" })
  applianceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class CreateNetworkApplianceVlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkApplianceVlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkApplianceVlanRequestBody;
}


export class CreateNetworkApplianceVlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkApplianceVlan201ApplicationJsonObject?: Map<string, any>;
}
