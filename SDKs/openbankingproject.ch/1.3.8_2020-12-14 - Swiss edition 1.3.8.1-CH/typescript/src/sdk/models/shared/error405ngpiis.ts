import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage405Piis } from "./tppmessage405piis";



// Error405NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error405NgPiis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage405Piis })
  tppMessages?: TppMessage405Piis[];
}
