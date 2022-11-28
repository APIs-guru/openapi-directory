import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LkeCluster
/** 
 * A Kubernetes cluster.
**/
export class LkeCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=k8s_version" })
  k8sVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
