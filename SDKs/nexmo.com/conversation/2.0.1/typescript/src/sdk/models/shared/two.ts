import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Two
/** 
 * Connect to a SIP Endpoint
**/
export class Two extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
