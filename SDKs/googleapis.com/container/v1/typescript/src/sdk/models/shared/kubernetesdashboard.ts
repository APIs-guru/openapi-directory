import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KubernetesDashboard
/** 
 * Configuration for the Kubernetes Dashboard.
**/
export class KubernetesDashboard extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
