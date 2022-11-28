import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudStorage
/** 
 * A storage location within Google cloud storage (GCS).
**/
export class GoogleCloudStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPath" })
  gcsPath?: string;
}
