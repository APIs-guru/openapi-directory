import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OwnerReference } from "./ownerreference";



// ObjectMeta
/** 
 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
**/
export class ObjectMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=deletionGracePeriodSeconds" })
  deletionGracePeriodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=deletionTimestamp" })
  deletionTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=finalizers" })
  finalizers?: string[];

  @SpeakeasyMetadata({ data: "json, name=generateName" })
  generateName?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerReferences", elemType: OwnerReference })
  ownerReferences?: OwnerReference[];

  @SpeakeasyMetadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
