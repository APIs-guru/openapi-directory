import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403Ais } from "./tppmessage403ais";



// Error403NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
export class Error403NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage403Ais })
  tppMessages?: TppMessage403Ais[];
}
