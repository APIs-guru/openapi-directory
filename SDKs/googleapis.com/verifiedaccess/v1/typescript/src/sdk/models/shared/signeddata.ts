import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignedData
/** 
 * The wrapper message of any data and its signature.
**/
export class SignedData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
