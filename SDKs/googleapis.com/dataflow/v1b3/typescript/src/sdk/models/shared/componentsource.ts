import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentSource
/** 
 * Description of an interstitial value between transforms in an execution stage.
**/
export class ComponentSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalTransformOrCollection" })
  originalTransformOrCollection?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
