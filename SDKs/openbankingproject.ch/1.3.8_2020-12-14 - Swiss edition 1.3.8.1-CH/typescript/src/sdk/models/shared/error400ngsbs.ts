import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage400Sbs } from "./tppmessage400sbs";


// Error400NgSbs
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 * 
**/
export class Error400NgSbs extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage400Sbs })
  tppMessages?: TppMessage400Sbs[];
}
