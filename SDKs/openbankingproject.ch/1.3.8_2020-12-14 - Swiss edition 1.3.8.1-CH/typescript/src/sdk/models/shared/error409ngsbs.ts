import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Sbs } from "./tppmessage409sbs";



// Error409NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 * 
**/
export class Error409NgSbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage409Sbs })
  tppMessages?: TppMessage409Sbs[];
}
