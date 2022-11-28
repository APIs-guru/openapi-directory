import { SpeakeasyBase } from "../../../internal/utils";
import { StorageSource } from "./storagesource";
/**
 * Response of `GenerateSourceUploadUrl` method.
**/
export declare class GenerateUploadUrlResponse extends SpeakeasyBase {
    storageSource?: StorageSource;
    uploadUrl?: string;
}
