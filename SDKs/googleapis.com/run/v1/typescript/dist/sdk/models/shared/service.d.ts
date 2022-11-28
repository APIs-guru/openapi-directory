import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ServiceSpec } from "./servicespec";
import { ServiceStatus } from "./servicestatus";
import { ServiceSpecInput } from "./servicespec";
import { ServiceStatusInput } from "./servicestatus";
/**
 * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
**/
export declare class Service extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: ServiceSpec;
    status?: ServiceStatus;
}
/**
 * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
**/
export declare class ServiceInput extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: ServiceSpecInput;
    status?: ServiceStatusInput;
}
