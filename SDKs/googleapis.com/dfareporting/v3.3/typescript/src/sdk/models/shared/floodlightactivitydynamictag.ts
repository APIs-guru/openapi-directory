import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FloodlightActivityDynamicTag
/** 
 * Dynamic Tag
**/
export class FloodlightActivityDynamicTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
