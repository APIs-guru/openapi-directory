import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PathFilter
/** 
 * A representation of filter path.
**/
export class PathFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=regexes" })
  regexes?: string[];
}
