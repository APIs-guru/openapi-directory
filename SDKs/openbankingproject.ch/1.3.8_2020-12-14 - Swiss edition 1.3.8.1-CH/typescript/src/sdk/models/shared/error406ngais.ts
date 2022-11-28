import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage406Ais } from "./tppmessage406ais";



// Error406NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 406.
 * 
**/
export class Error406NgAis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage406Ais })
  tppMessages?: TppMessage406Ais[];
}
