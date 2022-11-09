import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OwnerReference } from "./ownerreference";


// ObjectMeta
/** 
 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
**/
export class ObjectMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=deletionGracePeriodSeconds" })
  deletionGracePeriodSeconds?: number;

  @Metadata({ data: "json, name=deletionTimestamp" })
  deletionTimestamp?: string;

  @Metadata({ data: "json, name=finalizers" })
  finalizers?: string[];

  @Metadata({ data: "json, name=generateName" })
  generateName?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: number;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=ownerReferences", elemType: shared.OwnerReference })
  ownerReferences?: OwnerReference[];

  @Metadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
