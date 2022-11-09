import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointInfo
/** 
 * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
**/
export class EndpointInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationIp" })
  destinationIp?: string;

  @Metadata({ data: "json, name=destinationNetworkUri" })
  destinationNetworkUri?: string;

  @Metadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=sourceAgentUri" })
  sourceAgentUri?: string;

  @Metadata({ data: "json, name=sourceIp" })
  sourceIp?: string;

  @Metadata({ data: "json, name=sourceNetworkUri" })
  sourceNetworkUri?: string;

  @Metadata({ data: "json, name=sourcePort" })
  sourcePort?: number;
}
