import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSettings
/** 
 * Per-project settings for the Tool Results service.
**/
export class ProjectSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultBucket" })
  defaultBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
