import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage401Sbs } from "./tppmessage401sbs";


// Error401NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
export class Error401NgSbs extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage401Sbs })
  tppMessages?: TppMessage401Sbs[];
}
