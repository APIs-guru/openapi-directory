import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentTransform
/** 
 * Description of a transform executed as part of an execution stage.
**/
export class ComponentTransform extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalTransform" })
  originalTransform?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
