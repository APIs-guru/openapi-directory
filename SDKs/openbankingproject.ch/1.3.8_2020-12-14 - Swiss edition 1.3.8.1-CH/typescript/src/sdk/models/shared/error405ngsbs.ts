import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage405Sbs } from "./tppmessage405sbs";



// Error405NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error405NgSbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage405Sbs })
  tppMessages?: TppMessage405Sbs[];
}
