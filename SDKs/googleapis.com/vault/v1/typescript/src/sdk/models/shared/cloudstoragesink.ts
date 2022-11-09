import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudStorageFile } from "./cloudstoragefile";


// CloudStorageSink
/** 
 * Export sink for Cloud Storage files.
**/
export class CloudStorageSink extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.CloudStorageFile })
  files?: CloudStorageFile[];
}
