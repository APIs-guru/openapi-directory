import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StageSource
/** 
 * Description of an input or output of an execution stage.
**/
export class StageSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalTransformOrCollection" })
  originalTransformOrCollection?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
