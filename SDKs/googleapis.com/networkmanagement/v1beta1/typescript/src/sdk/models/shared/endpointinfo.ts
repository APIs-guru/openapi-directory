import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointInfo
/** 
 * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
**/
export class EndpointInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationIp" })
  destinationIp?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationNetworkUri" })
  destinationNetworkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAgentUri" })
  sourceAgentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceIp" })
  sourceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceNetworkUri" })
  sourceNetworkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=sourcePort" })
  sourcePort?: number;
}
