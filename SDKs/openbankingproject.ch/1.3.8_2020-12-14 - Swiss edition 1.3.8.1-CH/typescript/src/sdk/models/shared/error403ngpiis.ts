import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403Piis } from "./tppmessage403piis";



// Error403NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
export class Error403NgPiis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage403Piis })
  tppMessages?: TppMessage403Piis[];
}
