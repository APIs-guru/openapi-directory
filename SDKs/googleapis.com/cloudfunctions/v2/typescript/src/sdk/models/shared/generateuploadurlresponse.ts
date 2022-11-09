import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageSource } from "./storagesource";


// GenerateUploadUrlResponse
/** 
 * Response of `GenerateSourceUploadUrl` method.
**/
export class GenerateUploadUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;

  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
