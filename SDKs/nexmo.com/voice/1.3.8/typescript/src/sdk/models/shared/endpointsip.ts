import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointSip
/** 
 * Connect to a SIP Endpoint
**/
export class EndpointSip extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
