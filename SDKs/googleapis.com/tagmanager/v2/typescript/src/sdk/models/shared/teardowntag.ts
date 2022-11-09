import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeardownTag
/** 
 * Represents a tag that fires after another tag in order to tear down dependencies.
**/
export class TeardownTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=stopTeardownOnFailure" })
  stopTeardownOnFailure?: boolean;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
