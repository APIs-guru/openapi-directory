import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChainUri
/** 
 * Url to be used when displaying the chain.
**/
export class ChainUri extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
