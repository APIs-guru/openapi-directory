import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PathFilter
/** 
 * A representation of filter path.
**/
export class PathFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexes" })
  regexes?: string[];
}
