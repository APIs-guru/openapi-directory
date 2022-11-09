import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LkeCluster
/** 
 * A Kubernetes cluster.
**/
export class LkeCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=k8s_version" })
  k8sVersion?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
