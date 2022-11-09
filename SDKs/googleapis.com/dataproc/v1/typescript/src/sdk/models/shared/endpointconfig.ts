import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointConfig
/** 
 * Endpoint config for this cluster
**/
export class EndpointConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableHttpPortAccess" })
  enableHttpPortAccess?: boolean;

  @Metadata({ data: "json, name=httpPorts" })
  httpPorts?: Map<string, string>;
}
