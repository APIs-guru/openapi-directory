import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InfoTypeTransformation } from "./infotypetransformation";


// TextConfig
/** 
 * Configures how to transform sensitive text `InfoTypes`.
**/
export class TextConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=transformations", elemType: shared.InfoTypeTransformation })
  transformations?: InfoTypeTransformation[];
}
