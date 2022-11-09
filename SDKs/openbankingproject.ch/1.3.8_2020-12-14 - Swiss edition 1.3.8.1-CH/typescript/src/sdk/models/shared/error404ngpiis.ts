import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { TppMessage404Piis } from "./tppmessage404piis";


// Error404NgPiis
/** 
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
export class Error404NgPiis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage404Piis })
  tppMessages?: TppMessage404Piis[];
}
