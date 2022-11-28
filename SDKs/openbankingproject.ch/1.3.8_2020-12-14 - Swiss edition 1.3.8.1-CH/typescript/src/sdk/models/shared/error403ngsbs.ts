import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403Sbs } from "./tppmessage403sbs";



// Error403NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
export class Error403NgSbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage403Sbs })
  tppMessages?: TppMessage403Sbs[];
}
