import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage401Piis } from "./tppmessage401piis";



// Error401NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error401NgPiis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage401Piis })
  tppMessages?: TppMessage401Piis[];
}
