import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PushFilter
/** 
 * Push contains filter properties for matching GitHub git pushes.
**/
export class PushFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=invertRegex" })
  invertRegex?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
