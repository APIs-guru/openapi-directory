import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatchInstanceFilterGroupLabel
/** 
 * Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job. For example, a patch job can target VMs that have the following `GroupLabel`: `{"env":"test", "app":"web"}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`.
**/
export class PatchInstanceFilterGroupLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
