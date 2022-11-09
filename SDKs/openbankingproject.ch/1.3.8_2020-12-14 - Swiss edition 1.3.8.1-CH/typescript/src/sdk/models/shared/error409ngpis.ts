import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage409Pis } from "./tppmessage409pis";


// Error409NgPis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 * 
**/
export class Error409NgPis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage409Pis })
  tppMessages?: TppMessage409Pis[];
}
