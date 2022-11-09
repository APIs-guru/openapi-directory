import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChainName
/** 
 * Name to be used when displaying the chain.
**/
export class ChainName extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
