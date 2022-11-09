import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudStorage
/** 
 * A storage location within Google cloud storage (GCS).
**/
export class GoogleCloudStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPath" })
  gcsPath?: string;
}
