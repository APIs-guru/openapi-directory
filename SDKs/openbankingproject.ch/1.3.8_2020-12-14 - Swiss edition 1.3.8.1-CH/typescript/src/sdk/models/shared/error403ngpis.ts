import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403Pis } from "./tppmessage403pis";



// Error403NgPis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
export class Error403NgPis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage403Pis })
  tppMessages?: TppMessage403Pis[];
}
