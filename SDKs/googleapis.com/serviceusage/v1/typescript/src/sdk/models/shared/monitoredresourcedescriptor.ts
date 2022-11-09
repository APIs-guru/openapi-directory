import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelDescriptor } from "./labeldescriptor";

export enum MonitoredResourceDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// MonitoredResourceDescriptor
/** 
 * An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `"gce_instance"` and specifies the use of the labels `"instance_id"` and `"zone"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API. 
**/
export class MonitoredResourceDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.LabelDescriptor })
  labels?: LabelDescriptor[];

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: MonitoredResourceDescriptorLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
