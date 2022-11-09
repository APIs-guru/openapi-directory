import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PushFilter
/** 
 * Push contains filter properties for matching GitHub git pushes.
**/
export class PushFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=invertRegex" })
  invertRegex?: boolean;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
