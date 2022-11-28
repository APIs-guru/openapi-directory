import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceLabels
/** 
 * Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).
**/
export class ResourceLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
