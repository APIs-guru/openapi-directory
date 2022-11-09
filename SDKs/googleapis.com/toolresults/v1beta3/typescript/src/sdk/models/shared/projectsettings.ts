import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSettings
/** 
 * Per-project settings for the Tool Results service.
**/
export class ProjectSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultBucket" })
  defaultBucket?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
