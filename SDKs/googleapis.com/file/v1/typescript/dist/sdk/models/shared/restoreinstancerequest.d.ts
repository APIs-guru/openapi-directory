import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * RestoreInstanceRequest restores an existing instance's file share from a backup.
**/
export declare class RestoreInstanceRequest extends SpeakeasyBase {
    fileShare?: string;
    sourceBackup?: string;
}
