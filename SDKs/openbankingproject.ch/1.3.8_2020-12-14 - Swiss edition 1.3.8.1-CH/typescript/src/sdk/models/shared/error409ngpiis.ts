import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Piis } from "./tppmessage409piis";



// Error409NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 * 
**/
export class Error409NgPiis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage409Piis })
  tppMessages?: TppMessage409Piis[];
}
