import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage400Ais } from "./tppmessage400ais";


// Error400NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 * 
**/
export class Error400NgAis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage400Ais })
  tppMessages?: TppMessage400Ais[];
}
