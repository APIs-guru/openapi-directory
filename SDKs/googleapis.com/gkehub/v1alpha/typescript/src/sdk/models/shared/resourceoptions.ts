import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceOptions
/** 
 * ResourceOptions represent options for Kubernetes resource generation.
**/
export class ResourceOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectVersion" })
  connectVersion?: string;

  @Metadata({ data: "json, name=k8sVersion" })
  k8sVersion?: string;

  @Metadata({ data: "json, name=v1beta1Crd" })
  v1beta1Crd?: boolean;
}
