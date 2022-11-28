import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionTemplate } from "./revisiontemplate";
import { TrafficTargetInput } from "./traffictarget";
import { TrafficTarget } from "./traffictarget";
/**
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
export declare class ServiceSpecInput extends SpeakeasyBase {
    template?: RevisionTemplate;
    traffic?: TrafficTargetInput[];
}
/**
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
export declare class ServiceSpec extends SpeakeasyBase {
    template?: RevisionTemplate;
    traffic?: TrafficTarget[];
}
