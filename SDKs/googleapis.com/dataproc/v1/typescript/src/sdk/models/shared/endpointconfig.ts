import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointConfigInput
/** 
 * Endpoint config for this cluster
**/
export class EndpointConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableHttpPortAccess" })
  enableHttpPortAccess?: boolean;
}


// EndpointConfig
/** 
 * Endpoint config for this cluster
**/
export class EndpointConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableHttpPortAccess" })
  enableHttpPortAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=httpPorts" })
  httpPorts?: Map<string, string>;
}
