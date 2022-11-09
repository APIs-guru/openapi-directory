import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage406Ais } from "./tppmessage406ais";


// Error406NgAis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 406.
 * 
**/
export class Error406NgAis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage406Ais })
  tppMessages?: TppMessage406Ais[];
}
