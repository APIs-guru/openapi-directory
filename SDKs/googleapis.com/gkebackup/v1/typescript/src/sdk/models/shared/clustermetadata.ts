import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClusterMetadata
/** 
 * Information about the GKE cluster from which this Backup was created.
**/
export class ClusterMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=anthosVersion" })
  anthosVersion?: string;

  @Metadata({ data: "json, name=backupCrdVersions" })
  backupCrdVersions?: Map<string, string>;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=gkeVersion" })
  gkeVersion?: string;

  @Metadata({ data: "json, name=k8sVersion" })
  k8sVersion?: string;
}
