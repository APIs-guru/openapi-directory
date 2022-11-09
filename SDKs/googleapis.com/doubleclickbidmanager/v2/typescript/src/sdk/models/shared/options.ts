import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PathQueryOptions } from "./pathqueryoptions";


// Options
/** 
 * Additional query options.
**/
export class Options extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeOnlyTargetedUserLists" })
  includeOnlyTargetedUserLists?: boolean;

  @Metadata({ data: "json, name=pathQueryOptions" })
  pathQueryOptions?: PathQueryOptions;
}
