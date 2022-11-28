import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathQueryOptions } from "./pathqueryoptions";



// Options
/** 
 * Additional query options.
**/
export class Options extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeOnlyTargetedUserLists" })
  includeOnlyTargetedUserLists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pathQueryOptions" })
  pathQueryOptions?: PathQueryOptions;
}
