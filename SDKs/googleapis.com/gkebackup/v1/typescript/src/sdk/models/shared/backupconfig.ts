import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";



// BackupConfig
/** 
 * BackupConfig defines the configuration of Backups created via this BackupPlan.
**/
export class BackupConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allNamespaces" })
  allNamespaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=includeSecrets" })
  includeSecrets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeVolumeData" })
  includeVolumeData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedApplications" })
  selectedApplications?: NamespacedNames;

  @SpeakeasyMetadata({ data: "json, name=selectedNamespaces" })
  selectedNamespaces?: Namespaces;
}
