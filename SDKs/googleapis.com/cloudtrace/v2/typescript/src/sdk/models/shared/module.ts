import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TruncatableString } from "./truncatablestring";
import { TruncatableString } from "./truncatablestring";


// Module
/** 
 * Binary module.
**/
export class Module extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildId" })
  buildId?: TruncatableString;

  @Metadata({ data: "json, name=module" })
  module?: TruncatableString;
}
