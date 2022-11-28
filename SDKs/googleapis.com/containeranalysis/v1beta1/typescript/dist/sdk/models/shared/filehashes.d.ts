import { SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";
/**
 * Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
**/
export declare class FileHashes extends SpeakeasyBase {
    fileHash?: Hash[];
}
