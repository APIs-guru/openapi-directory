import { SpeakeasyBase } from "../../../internal/utils";
import { RestoreDatabaseEncryptionConfig } from "./restoredatabaseencryptionconfig";
/**
 * The request for RestoreDatabase.
**/
export declare class RestoreDatabaseRequest extends SpeakeasyBase {
    backup?: string;
    databaseId?: string;
    encryptionConfig?: RestoreDatabaseEncryptionConfig;
}
