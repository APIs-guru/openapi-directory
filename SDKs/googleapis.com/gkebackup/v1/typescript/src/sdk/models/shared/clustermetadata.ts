import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterMetadata
/** 
 * Information about the GKE cluster from which this Backup was created.
**/
export class ClusterMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anthosVersion" })
  anthosVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=backupCrdVersions" })
  backupCrdVersions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=gkeVersion" })
  gkeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=k8sVersion" })
  k8sVersion?: string;
}
