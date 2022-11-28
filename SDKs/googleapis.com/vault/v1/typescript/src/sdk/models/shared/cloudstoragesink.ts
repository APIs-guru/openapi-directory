import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudStorageFile } from "./cloudstoragefile";



// CloudStorageSink
/** 
 * Export sink for Cloud Storage files.
**/
export class CloudStorageSink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: CloudStorageFile })
  files?: CloudStorageFile[];
}
