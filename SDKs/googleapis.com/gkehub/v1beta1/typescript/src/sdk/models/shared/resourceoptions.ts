import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceOptions
/** 
 * ResourceOptions represent options for Kubernetes resource generation.
**/
export class ResourceOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectVersion" })
  connectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=k8sVersion" })
  k8sVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=v1beta1Crd" })
  v1beta1Crd?: boolean;
}
