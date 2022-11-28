import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage405Ais } from "./tppmessage405ais";



// Error405NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error405NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage405Ais })
  tppMessages?: TppMessage405Ais[];
}
