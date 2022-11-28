import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KubernetesDashboard
/** 
 * Configuration for the Kubernetes Dashboard.
**/
export class KubernetesDashboard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
