import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage429Ais } from "./tppmessage429ais";



// Error429NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 429.
 * 
**/
export class Error429NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage429Ais })
  tppMessages?: TppMessage429Ais[];
}
