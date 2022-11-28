import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
export declare enum MonitoredResourceDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `"gce_instance"` and specifies the use of the labels `"instance_id"` and `"zone"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API.
**/
export declare class MonitoredResourceDescriptor extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    labels?: LabelDescriptor[];
    launchStage?: MonitoredResourceDescriptorLaunchStageEnum;
    name?: string;
    type?: string;
}
