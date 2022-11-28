import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerReference } from "./ownerreference";
/**
 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
**/
export declare class ObjectMeta extends SpeakeasyBase {
    annotations?: Map<string, string>;
    clusterName?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Map<string, string>;
    name?: string;
    namespace?: string;
    ownerReferences?: OwnerReference[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
}
