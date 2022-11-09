import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConsumerProject
/** 
 * Represents a consumer project.
**/
export class ConsumerProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectNum" })
  projectNum?: string;
}
