import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChainUri
/** 
 * Url to be used when displaying the chain.
**/
export class ChainUri extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
