import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Location of the source in an archive file in Google Cloud Storage.
**/
export declare class StorageSource extends SpeakeasyBase {
    bucket?: string;
    generation?: string;
    object?: string;
}
