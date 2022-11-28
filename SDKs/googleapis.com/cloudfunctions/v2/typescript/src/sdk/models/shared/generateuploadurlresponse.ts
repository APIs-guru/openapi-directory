import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageSource } from "./storagesource";



// GenerateUploadUrlResponse
/** 
 * Response of `GenerateSourceUploadUrl` method.
**/
export class GenerateUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;

  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
