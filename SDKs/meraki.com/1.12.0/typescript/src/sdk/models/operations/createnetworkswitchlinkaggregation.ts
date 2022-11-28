import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile: string;
}


export class CreateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=switchPorts", elemType: CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts })
  switchPorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];

  @SpeakeasyMetadata({ data: "json, name=switchProfilePorts", elemType: CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts })
  switchProfilePorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}


export class CreateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchLinkAggregationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateNetworkSwitchLinkAggregationRequestBody;
}


export class CreateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchLinkAggregation201ApplicationJsonObject?: Map<string, any>;
}
