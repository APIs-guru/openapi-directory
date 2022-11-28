import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404Sbs } from "./tppmessage404sbs";



// Error404NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
export class Error404NgSbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage404Sbs })
  tppMessages?: TppMessage404Sbs[];
}
