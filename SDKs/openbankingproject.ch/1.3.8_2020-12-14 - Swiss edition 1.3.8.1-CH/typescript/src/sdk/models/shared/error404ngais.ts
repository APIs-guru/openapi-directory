import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404Ais } from "./tppmessage404ais";



// Error404NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
export class Error404NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage404Ais })
  tppMessages?: TppMessage404Ais[];
}
