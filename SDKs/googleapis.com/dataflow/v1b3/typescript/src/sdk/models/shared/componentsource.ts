import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentSource
/** 
 * Description of an interstitial value between transforms in an execution stage.
**/
export class ComponentSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalTransformOrCollection" })
  originalTransformOrCollection?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
