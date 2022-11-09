import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";


// BackupConfig
/** 
 * BackupConfig defines the configuration of Backups created via this BackupPlan.
**/
export class BackupConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allNamespaces" })
  allNamespaces?: boolean;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=includeSecrets" })
  includeSecrets?: boolean;

  @Metadata({ data: "json, name=includeVolumeData" })
  includeVolumeData?: boolean;

  @Metadata({ data: "json, name=selectedApplications" })
  selectedApplications?: NamespacedNames;

  @Metadata({ data: "json, name=selectedNamespaces" })
  selectedNamespaces?: Namespaces;
}
