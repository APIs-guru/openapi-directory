import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";



// LogDescriptor
/** 
 * A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer
**/
export class LogDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: LabelDescriptor })
  labels?: LabelDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
