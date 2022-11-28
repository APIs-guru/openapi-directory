import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RestoreInstanceRequest restores an existing instance's file share from a snapshot or backup.
**/
export declare class RestoreInstanceRequest extends SpeakeasyBase {
    fileShare?: string;
    sourceBackup?: string;
    sourceSnapshot?: string;
}
