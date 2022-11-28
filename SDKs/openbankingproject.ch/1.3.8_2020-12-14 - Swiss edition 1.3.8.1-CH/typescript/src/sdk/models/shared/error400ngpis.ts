import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage400Pis } from "./tppmessage400pis";



// Error400NgPis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 * 
**/
export class Error400NgPis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage400Pis })
  tppMessages?: TppMessage400Pis[];
}
