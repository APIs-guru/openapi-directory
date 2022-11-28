import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage401Ais } from "./tppmessage401ais";



// Error401NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error401NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage401Ais })
  tppMessages?: TppMessage401Ais[];
}
