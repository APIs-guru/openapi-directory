import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage400Sbs } from "./tppmessage400sbs";



// Error400NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 * 
**/
export class Error400NgSbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage400Sbs })
  tppMessages?: TppMessage400Sbs[];
}
