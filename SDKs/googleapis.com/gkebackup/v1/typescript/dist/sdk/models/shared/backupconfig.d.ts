import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
/**
 * BackupConfig defines the configuration of Backups created via this BackupPlan.
**/
export declare class BackupConfig extends SpeakeasyBase {
    allNamespaces?: boolean;
    encryptionKey?: EncryptionKey;
    includeSecrets?: boolean;
    includeVolumeData?: boolean;
    selectedApplications?: NamespacedNames;
    selectedNamespaces?: Namespaces;
}
