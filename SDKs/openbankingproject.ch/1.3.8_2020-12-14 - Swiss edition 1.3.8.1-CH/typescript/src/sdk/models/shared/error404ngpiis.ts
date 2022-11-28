import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404Piis } from "./tppmessage404piis";



// Error404NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
export class Error404NgPiis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage404Piis })
  tppMessages?: TppMessage404Piis[];
}
