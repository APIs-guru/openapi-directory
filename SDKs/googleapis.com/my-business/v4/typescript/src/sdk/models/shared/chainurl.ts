import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChainUrl
/** 
 * Url to be used when displaying the chain.
**/
export class ChainUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
