import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Ais } from "./tppmessage409ais";



// Error409NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 * 
**/
export class Error409NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage409Ais })
  tppMessages?: TppMessage409Ais[];
}
