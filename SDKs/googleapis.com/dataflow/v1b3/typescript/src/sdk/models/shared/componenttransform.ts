import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentTransform
/** 
 * Description of a transform executed as part of an execution stage.
**/
export class ComponentTransform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalTransform" })
  originalTransform?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
