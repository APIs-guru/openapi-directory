import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage429Ais } from "./tppmessage429ais";


// Error429NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 429.
 * 
**/
export class Error429NgAis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage429Ais })
  tppMessages?: TppMessage429Ais[];
}
