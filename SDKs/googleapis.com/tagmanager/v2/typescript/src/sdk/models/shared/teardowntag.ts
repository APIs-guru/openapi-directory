import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeardownTag
/** 
 * Represents a tag that fires after another tag in order to tear down dependencies.
**/
export class TeardownTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stopTeardownOnFailure" })
  stopTeardownOnFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
