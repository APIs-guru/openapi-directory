import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointSip
/** 
 * Connect to a SIP Endpoint
**/
export class EndpointSip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
