import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConsumerProject
/** 
 * Represents a consumer project.
**/
export class ConsumerProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectNum" })
  projectNum?: string;
}
