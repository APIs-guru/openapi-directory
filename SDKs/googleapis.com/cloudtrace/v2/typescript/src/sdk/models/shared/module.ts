import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TruncatableString } from "./truncatablestring";



// Module
/** 
 * Binary module.
**/
export class Module extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildId" })
  buildId?: TruncatableString;

  @SpeakeasyMetadata({ data: "json, name=module" })
  module?: TruncatableString;
}
