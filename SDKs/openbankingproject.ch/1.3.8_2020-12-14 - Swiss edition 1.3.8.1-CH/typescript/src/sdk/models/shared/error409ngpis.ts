import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Pis } from "./tppmessage409pis";



// Error409NgPis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 * 
**/
export class Error409NgPis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage409Pis })
  tppMessages?: TppMessage409Pis[];
}
