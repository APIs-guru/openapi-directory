import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404Pis } from "./tppmessage404pis";



// Error404NgPis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
export class Error404NgPis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage404Pis })
  tppMessages?: TppMessage404Pis[];
}
