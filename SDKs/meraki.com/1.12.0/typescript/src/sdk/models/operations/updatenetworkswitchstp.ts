import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchStpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchStpRequestBodyStpBridgePriority extends SpeakeasyBase {
  @Metadata({ data: "json, name=stacks" })
  stacks?: string[];

  @Metadata({ data: "json, name=stpPriority" })
  stpPriority: number;

  @Metadata({ data: "json, name=switchProfiles" })
  switchProfiles?: string[];

  @Metadata({ data: "json, name=switches" })
  switches?: string[];
}


export class UpdateNetworkSwitchStpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rstpEnabled" })
  rstpEnabled?: boolean;

  @Metadata({ data: "json, name=stpBridgePriority", elemType: operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority })
  stpBridgePriority?: UpdateNetworkSwitchStpRequestBodyStpBridgePriority[];
}


export class UpdateNetworkSwitchStpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchStpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStpRequestBody;
}


export class UpdateNetworkSwitchStpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchStp200ApplicationJsonObject?: Map<string, any>;
}
