import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linkAggregationId" })
  linkAggregationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
  @Metadata({ data: "json, name=portId" })
  portId: string;

  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
  @Metadata({ data: "json, name=portId" })
  portId: string;

  @Metadata({ data: "json, name=profile" })
  profile: string;
}


export class UpdateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=switchPorts", elemType: operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts })
  switchPorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];

  @Metadata({ data: "json, name=switchProfilePorts", elemType: operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts })
  switchProfilePorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}


export class UpdateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchLinkAggregationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchLinkAggregationRequestBody;
}


export class UpdateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchLinkAggregation200ApplicationJsonObject?: Map<string, any>;
}
