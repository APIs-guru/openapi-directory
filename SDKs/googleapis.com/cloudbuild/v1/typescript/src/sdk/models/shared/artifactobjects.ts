import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";



// ArtifactObjects
/** 
 * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
**/
export class ArtifactObjects extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing?: TimeSpan;
}
