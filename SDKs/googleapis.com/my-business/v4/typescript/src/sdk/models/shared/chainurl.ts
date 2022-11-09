import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChainUrl
/** 
 * Url to be used when displaying the chain.
**/
export class ChainUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
