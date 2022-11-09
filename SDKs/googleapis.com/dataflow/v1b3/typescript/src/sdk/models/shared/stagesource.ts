import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StageSource
/** 
 * Description of an input or output of an execution stage.
**/
export class StageSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalTransformOrCollection" })
  originalTransformOrCollection?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
