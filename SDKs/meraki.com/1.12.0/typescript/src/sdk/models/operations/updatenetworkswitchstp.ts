import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchStpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchStpRequestBodyStpBridgePriority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stacks" })
  stacks?: string[];

  @SpeakeasyMetadata({ data: "json, name=stpPriority" })
  stpPriority: number;

  @SpeakeasyMetadata({ data: "json, name=switchProfiles" })
  switchProfiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=switches" })
  switches?: string[];
}


export class UpdateNetworkSwitchStpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rstpEnabled" })
  rstpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stpBridgePriority", elemType: UpdateNetworkSwitchStpRequestBodyStpBridgePriority })
  stpBridgePriority?: UpdateNetworkSwitchStpRequestBodyStpBridgePriority[];
}


export class UpdateNetworkSwitchStpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchStpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStpRequestBody;
}


export class UpdateNetworkSwitchStpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchStp200ApplicationJsonObject?: Map<string, any>;
}
