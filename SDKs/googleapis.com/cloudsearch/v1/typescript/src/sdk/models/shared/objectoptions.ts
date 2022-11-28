import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectDisplayOptions } from "./objectdisplayoptions";
import { FreshnessOptions } from "./freshnessoptions";



// ObjectOptions
/** 
 * The options for an object.
**/
export class ObjectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayOptions" })
  displayOptions?: ObjectDisplayOptions;

  @SpeakeasyMetadata({ data: "json, name=freshnessOptions" })
  freshnessOptions?: FreshnessOptions;

  @SpeakeasyMetadata({ data: "json, name=suggestionFilteringOperators" })
  suggestionFilteringOperators?: string[];
}
