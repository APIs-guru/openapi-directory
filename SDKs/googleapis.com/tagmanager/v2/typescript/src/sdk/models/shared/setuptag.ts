import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetupTag
/** 
 * Represents a reference to atag that fires before another tag in order to set up dependencies.
**/
export class SetupTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=stopOnSetupFailure" })
  stopOnSetupFailure?: boolean;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
