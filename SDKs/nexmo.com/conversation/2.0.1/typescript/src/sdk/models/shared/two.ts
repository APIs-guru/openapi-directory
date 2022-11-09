import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Two
/** 
 * Connect to a SIP Endpoint
**/
export class Two extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
