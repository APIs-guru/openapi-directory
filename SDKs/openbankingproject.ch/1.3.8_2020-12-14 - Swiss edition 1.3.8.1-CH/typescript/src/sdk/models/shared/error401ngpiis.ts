import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage401Piis } from "./tppmessage401piis";


// Error401NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error401NgPiis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage401Piis })
  tppMessages?: TppMessage401Piis[];
}
