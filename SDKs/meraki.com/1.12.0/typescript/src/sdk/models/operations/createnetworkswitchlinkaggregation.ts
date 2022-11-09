import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
  @Metadata({ data: "json, name=portId" })
  portId: string;

  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
  @Metadata({ data: "json, name=portId" })
  portId: string;

  @Metadata({ data: "json, name=profile" })
  profile: string;
}


export class CreateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=switchPorts", elemType: operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts })
  switchPorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];

  @Metadata({ data: "json, name=switchProfilePorts", elemType: operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts })
  switchProfilePorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}


export class CreateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchLinkAggregationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateNetworkSwitchLinkAggregationRequestBody;
}


export class CreateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchLinkAggregation201ApplicationJsonObject?: Map<string, any>;
}
