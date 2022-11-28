import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChainName
/** 
 * Name to be used when displaying the chain.
**/
export class ChainName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
