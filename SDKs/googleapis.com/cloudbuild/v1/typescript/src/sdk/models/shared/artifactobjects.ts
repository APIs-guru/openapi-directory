import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSpan } from "./timespan";


// ArtifactObjects
/** 
 * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
**/
export class ArtifactObjects extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=paths" })
  paths?: string[];

  @Metadata({ data: "json, name=timing" })
  timing?: TimeSpan;
}
