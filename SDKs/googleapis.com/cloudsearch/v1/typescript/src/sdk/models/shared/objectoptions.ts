import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectDisplayOptions } from "./objectdisplayoptions";
import { FreshnessOptions } from "./freshnessoptions";


// ObjectOptions
/** 
 * The options for an object.
**/
export class ObjectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayOptions" })
  displayOptions?: ObjectDisplayOptions;

  @Metadata({ data: "json, name=freshnessOptions" })
  freshnessOptions?: FreshnessOptions;

  @Metadata({ data: "json, name=suggestionFilteringOperators" })
  suggestionFilteringOperators?: string[];
}
