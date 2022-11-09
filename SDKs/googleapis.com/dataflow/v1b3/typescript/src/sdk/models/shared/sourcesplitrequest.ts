import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSplitOptions } from "./sourcesplitoptions";
import { Source } from "./source";


// SourceSplitRequest
/** 
 * Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.
**/
export class SourceSplitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: SourceSplitOptions;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
