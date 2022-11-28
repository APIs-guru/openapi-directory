import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetupTag
/** 
 * Represents a reference to atag that fires before another tag in order to set up dependencies.
**/
export class SetupTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stopOnSetupFailure" })
  stopOnSetupFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
