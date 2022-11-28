import { SpeakeasyBase } from "../../../internal/utils";
/**
 * StorageSource describes the location of the source in an archive file in Google Cloud Storage.
**/
export declare class StorageSource extends SpeakeasyBase {
    bucket?: string;
    generation?: string;
    object?: string;
}
