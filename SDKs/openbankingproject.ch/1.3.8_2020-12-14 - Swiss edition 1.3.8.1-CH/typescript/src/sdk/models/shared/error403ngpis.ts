import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage403Pis } from "./tppmessage403pis";


// Error403NgPis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
export class Error403NgPis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage403Pis })
  tppMessages?: TppMessage403Pis[];
}
