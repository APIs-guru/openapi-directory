import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkAggregationId" })
  linkAggregationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile: string;
}


export class UpdateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=switchPorts", elemType: UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts })
  switchPorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];

  @SpeakeasyMetadata({ data: "json, name=switchProfilePorts", elemType: UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts })
  switchProfilePorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}


export class UpdateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchLinkAggregationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchLinkAggregationRequestBody;
}


export class UpdateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchLinkAggregation200ApplicationJsonObject?: Map<string, any>;
}
