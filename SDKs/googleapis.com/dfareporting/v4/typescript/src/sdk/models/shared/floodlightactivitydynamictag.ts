import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FloodlightActivityDynamicTag
/** 
 * Dynamic Tag
**/
export class FloodlightActivityDynamicTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
